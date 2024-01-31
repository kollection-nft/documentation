---
sidebar_position: 3
label: Metadata
---
# Metadata

## Intro

Metadata is the data that describes each individual NFT in your collection. This includes a description, attributes, an image URL, and any other things that may be used to describe your NFTs. It's important to note that this metadata can be extended to include any other data that you may want and it's not restricted just to these parameters. For example, if you are developing a game that utilizes different properties for items in your game, it would be entirely acceptable to use additional fields to describe these items.

For ease of use and interoperability, Kollection follows the [OpenSea Metadata Standard](https://docs.opensea.io/docs/metadata-standards) that is used for ERC-721 NFT collections. There are many tools available for generating this type of metadata that will also work here with the KCS-2 token standard on Koinos.

## Example metadata

The metadata is stored and served as a JSON file. Below is an example JSON metadata file for an NFT in the OG-Rex collection.

```shell
{
   "name":"OG-Rex #1",
   "description":"OG-Rex",
   "attributes":[
      {
         "trait_type":"Background",
         "value":"Red"
      },
      {
         "trait_type":"Body",
         "value":"Black"
      },
      {
         "trait_type":"Clothing",
         "value":"Suit"
      },
      {
         "trait_type":"Eyes",
         "value":"Goggles"
      },
      {
         "trait_type":"Head",
         "value":"Spikes"
      },
      {
         "trait_type":"Mouth",
         "value":"Teeth"
      }
   ],
   "image":"https://ogrex.io/images/1.png"
}
```

Description of fields:

`name` - This is the human readable name of this particular NFT.

`description` - This is a general description of your collection.

`attributes` - Attributes are certain properties of your NFT which list different traits. Attributes is an array of `trait_types` and the Kollection interface will display these if set.

`image` - the URL where the image for this NFT is located. This can be either an `https` or `ipfs` link.

`animation_url` - Kollection uses this metadata field to check for .glb files if you want to display 3D objects.

You are free to use any additional fields described in the standard (and even ones that are not). The minimum required fields for a collection to be listed on Kollection are `name`, `description`, and `image`. As Kollection is in active development we will eventually expand to use additional metadata fields. Collections with 3D objects should not only contain the `animation_url`, but also a static rendered `image`.

### Linking to your collection

The metadata for an individual token (NFT) is expected to be found at a path that is built from your base URI set in your collection along with the token's ID. For exmaple, if your URI is set to `https://ogrex.io/api/rex`, and the first token is the hex string representation of `1` which is `0x31`, the metadata for this token should be found at `https://ogrex.io/api/rex/0x31`.

#### IMPORTANT

Please note that the path should be exactly `URI/tokenId`, there should not be a `.json` extension at the end. Your web hosting provider (or IPFS gateway) should serve this file with a `content-type` of `application/json`. Most web servers and IPFS gateways will automatically do this for you.
