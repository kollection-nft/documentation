---
sidebar_position: 2
label: Contracts
---
# Contracts 

Contracts on Koinos are standardized through Koinos Contract Standards.

[KCS-2](https://github.com/koinos/koinos-contract-standards/blob/master/KCSs/kcs-2.md) is the document which defines a standard for NFTs on Koinos.

## Marketplace Contract

Kollection is powered by a marketplace contract. You won't need to know much about this in order to list your own NFT collection, but, it's probably good to understand the basics. Koinos is a gasless blockchain so there are no transaction fees for any of these actions.

When a user lists an NFT for sale on Kollection, two things happen:
- 1) An order is created on-chain that allows your NFT to be transfered to another owner when they pay the specified price in Koin. This order can be set to expire or be an unlimited timeframe.
- 2) An authorization is created that allows your NFT to be transferred by the marketplace contract.

When a user buys an NFT that is listed, two things happen:
- 1) The amount of Koin minus a 2.5% marketplace fee and minus royalties set by the collection owner (if any) is transferred to the seller's address.
- 2) The NFT is transferred to the buyer's address.

When a user cancel's their order (or manually transfers the NFT to another address) the order is canceled and the authorization is removed.

The open sourced [marketplace contract](https://github.com/kollection-nft/marketplace) can be found in this GitHub repository.

## Collection Contract

To list an NFT collection you will need to create an NFT contract. We have provided a default template for doing this here: [collection base contract](https://github.com/kollection-nft/collection-base)

### What do I need in order to create and upload a contract?

- A PC or VPS running Linux, MacOS, or Windows with Windows Subsystem for Linux
- NodeJS v16+ [available here](https://nodejs.org/en/download)
- Yarn NodeJS package manager [available here](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- The Koinos-CLI to upload the contract [available here](https://github.com/koinos/koinos-cli)
- Git [available here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Your images and metadata hosted somewhere either via https or ipfs. [Read more about metadata here](metadata).

### Step 1: Pull in the contract template

You can do this with the following command:

```
git clone https://github.com/kollection-nft/collection-base
```

You now will have the template in a directory called `collection-base`. Feel free to go ahead and re-name this directory to your contract name.

### Step 2: Edit the `constants.ts` file to customize

In the directory `collection-base/assembly` you will see a file called `Constants.ts`. You will need to edit this file to fill in specifics for your collection contract. These variables match those used in the ERC-721 standard and is the reason these specific names were picked for ease of migration from NFT projects on other chains.

`NAME` - this is the human readable name of your collection. Example: `OG-Rex Collection`

`SYMBOL` - this is the trading symbol for the "tokens" (NFTs) of your collection. This should be capitalized with no spaces. Example: `OGREX`.

`MINT_PRICE` - this is the price for minting an NFT in your collection in satoshis. Since Koin has a precision of 8, 1 Koin would be 100000000. 100 Koin would be 1000000000. If you intend to mint NFT's to yourself and not hold a minting event, you'll just want to set this to 0.

`MINT_FEE` - if you set this to true, this allows other people to mint NFT's for the `MINT_PRICE`. If false, only you (the collection owner) can mint NFT's.

`MAX_SUPPLY` - this is the maximum amount of mintable tokens (NFTs) in your collection.

`URI` - this is the base path for where NFT metadata can be located for each NFT in your collection. This can be either `ipfs` or `https`. Example: `https://ogrex.io/api/rex`. [Read more about metadata here](metadata).

`OWNER` - this is your owner address. You'll likely want to initially set this to the same public adddress you're using for your contract. The reason this exists is it's possible to transfer ownership of a collection to someone else, and, it also makes it possible for interfaces (like Kollection) to have the owner of a collection verify they are who they say they are for updating things like off-chain metadata (Discord, YouTube, additional images and descriptions, etc). The address will need to be enclosed inside `Base58.decode("");`, example: `Base58.decode("1N2AhqGGticZ8hYmwNPWoroEBvTp3YGsLW");`

`TOKEN_PAY` - this is the contract address for the token that users would use to purchase NFT's for the collection. For testnet, you should set this to `Base58.decode("19JntSm8pSNETT9aHTwAUHC5RMoaSmgZPJ");`, for main net, you would set this to `Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");`

`ADDRESS_PAY` - Set this to the address that will receive funds after tokens are minted. This could be your owner address, but, it could also be a separate treasury address for your collection.

#### IMPORTANT!

If you intend to mint tokens to yourself and just list them instead of holding a minting event, there are a couple minor things you will need to change in the contract.

Changes in `assembly/Collections.ts`:

On line 132 you will change `const to = args.to;` to `const to = Constants.OWNER;`. This overrides the "to" field to always mint to your owner address.

On line 187 you will change `System.require(balance.value <= 10, "exceeds the limit of tokens per address");` to `System.require(balance.value <= Constants.MAX_SUPPLY, "exceeds the limit of tokens per address");`. This removes the hard-coded limit of 10 minted tokens per address to be the `MAX_SUPPLY`.

### Step 3: Building your contract

In the base `collection-base` directory, type:

```
yarn
```

This will have the yarn package manager install any necessary packages under the `node_modules` directory.

Next type:

```
yarn build:release
```

After building, you will find the built wasm contract here: `collection-base/build/release/contract.wasm`. You will find an abi file here: `collections-base/abi/collections.abi`. You will need both of these files to upload the contract to either testnet or main net using the Koinos-CLI wallet.

### Step 4: Uploading your contract

You will first want to test your contract on test net to make sure everything is working as intended.

To upload your contract you will use the Koinos-CLI wallet. It's [available on GitHub here](https://github.com/koinos/koinos-cli) and can either be built from sources or you can download pre-built executables. The official quickstart guide for the Koinos-CLI is [available here](https://github.com/koinos/koinos-cli).

Please familiarize yourself with the CLI using the links above. You will want to create a new wallet for your contract address (which can also be the owner of your collection). Please backup your keys and keep them safe. Never give your private key to anyone.

The Koinos-CLI will start up and connect to main net automatically by using the provided `.koinosrc` file. If you don't have this, this is the main net `.koinosrc` file:

```
connect https://api.koinos.io/
register_token koin 15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL
register_token vhp 1AdzuXSpC6K9qtXdCBgD5NUpDNwHjMgrc9
register pob 159myq5YUhhoVWu3wsHKHiJYKPKGUrGiyv
register name_service 19WxDJ9Kcvx4VqQFkpwVmwVEy1hMuwXtQE
register claim 18zw3ZokdfHtudzaWAUnU4tUvKzKiJeN76
register resources 1HGN9h47CzoFwU2bQZwe6BYoX4TM6pXc4b
register governance 19qj51eTbSFJYU7ZagudkpxPgNSzPMfdPX
```

However, you'll first want to connect to testnet to upload and test your contract. To do that, swap out your existing `.koinosrc` mainnet file with this one:

```
connect https://harbinger-api.koinos.io
register koin 19JntSm8pSNETT9aHTwAUHC5RMoaSmgZPJ
register pob 198RuEouhgiiaQm7uGfaXS6jqZr6g6nyoR
register vhp 1JZqj7dDrK5LzvdJgufYBJNUFo88xBoWC8 
register name_service 1AM1c73tDNTc24KYqYvSHmoZ2C7oe4DZhh
```

With this file in place when you start the Koinos-CLI it will automatically connect to testnet and register the necessary contracts (such as Koin) to interact with.

You will need a little bit of `tKOIN` so that you have Mana to upload your contract with. If you don't have any, you can use the faucet available in the official Koinos discord (or reach out to us, we're happy to help!). Likewise, when uploading to mainnet, you will need a small amount of `KOIN` in your wallet available so that you have Mana to upload. Remember, on Koinos you don't pay transaction fees - you use Mana which is a property of Koin and recharges like a battery.

With your wallet open / unlocked in the CLI, you would use the following command to upload. Be sure to replace the file path to match where your `contract.wasm` and `collections.abi` files are actually located.

```
upload collection-base/build/release/contract.asm collection-base/abi/collections.abi
```

If successful, you will see a message with a transaction ID.

You can now view (and interact with) your uploaded contract on [koinosblocks](https://koinosblocks.com) block explorer by searching for your contract address. If this is a testnet upload, you will be able to see it on the [harbinger testnet version of koinosblocks](https://harbinger.koinosblocks.com).

In addition, if your contract is valid and your metadata and images are available, you should now see your collection listed on the testnet at [kollection-staging.app](https://kollection-staging.app)

### Step 5: Minting tokens (NFTs)

These instructions are for minting tokens to yourself to list on Kollection. If you're building your own minting page, you would use these same writeable contract features, but, you would call them programatically from your own website. In the future (once "Creator Tools" launches) you will be able to host minting events on Kollection without any code.

From [koinosblocks](https://koinosblocks.com) (or [testnet koinosblocks](https://harbinger.koinosblocks.com)) while viewing your contract's address, click the Connect button in the upper-right hand corner and connect your wallet with either the Kondor or MKW wallet.

Scroll down the page to see "Writeable Options" and click on the "mint" one.

In the `TO` field, put the address to mint to (if minting to yourself, this would be your contract/owner address).

In the `VALUE` field, put the number of NFT's to mint in this transaction. This can't be greater than your `MAX_SUPPLY`.

In the `SIGN AS` drop down, select your wallet address that you are signing the transaction with.

Click "Sign and broadcast".

Congratulations - you have now minted NFT's for your collection to yourself. These can now be listed on collection as new orders for sale simply by using the Kollection website.

By default, the contract will create the token ID's in numerical order starting with `1`. These are represented by the hex string encoding of the string version of the number - so for example, the token ID for `1` is represented as `0x31`. This is not a requirement for the KCS-2 standard and any valid hex value could be used - however, we recommend using hex strings for ID's. The token ID is also used as part of the path to find your metadata. [Read more about metadata here](metadata).

