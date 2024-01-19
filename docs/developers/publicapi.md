---
sidebar_position: 4
label: Public API
---
# Public API

### Intro

In the interest of helping developers build open, transparent, and connected Web3 experiences on Koinos, we are providing some of our marketplace data free of charge. If you use this data, we do require you to provide attribution to Kollection in your app or on your site. When using this API data, you should link to the Kollection website where it makes sense to do so. Our [brand guidelines](https://github.com/kollection-nft/branding) repository provides images that can be used.

API results are cached at the CDN level - results could be up to 60 seconds old at any point in time.

Presently there is only one API method available but more could be added in the future.


### Methods

`nfts_by_owner` method:

This method queries for all NFTs that are owned by a particular address. It returns basic collection info and some metadata fields.


```
curl https://kollection.app/api/nfts_by_owner?ownerAddress=addressToQueryHere
```

Simply replace `addressToQueryHere` with the address that you are wanting to check. Please note that the API expects this to be a GET request.

The result will be returned as an object called `data`. If there are zero entries in `data`, it is likely that no NFTs are currently owned by that address.