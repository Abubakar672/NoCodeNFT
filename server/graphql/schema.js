const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type FloorPriceCurrency {
        contract: String
        name: String
        symbol: String
        decimals: String
    }
    type FloorPriceAmount {
        raw:String
        decimal: Float
        usd:Float
        native:Float
    }
    type FloorPrice {
        currency: FloorPriceCurrency
        amount: FloorPriceAmount
    }
    type FloorToken {
        contract:String
        tokenId:String
        name:String
        image:String
    }
    type FloorAsk {
        id: String
        sourceDomain:String
        price:FloorPrice
        maker: String
        validFrom: Float
        validUntil: Float
        token: FloorToken
    }
    type Rank{
        _1day: Float!
        _7day: Float!
        _30day: Float!
        allTime: Float!
    }
    type Volume{
        _1day: Float!
        _7day: Float!
        _30day: Float!
        allTime: Float!
    }
    type Change{
        _1day: Float!
        _7day: Float!
        _30day: Float!
    }
    type LastTokenBuy{
        value:Float,
        timestamp:Float
    }
    type Token{
        contract:String
        tokenId:String
        name:String
        description:String
        image:String
        media:String
        kind:String
        isFlagged:Boolean
        lastFlagUpdate:String
        lastFlagChange:String
        rarity:Float
        rarityRank:Float
        lastBuy:LastTokenBuy
        lastSell:LastTokenBuy
        owner:String
        collection:Collection
    }
    type Collection{
        collectionId:String
        name:String
        slug:String
        image:String
        banner:String
        externalUrl:String
        openseaVerificationStatus:String
        description: String
        sampleImages: [String!],
        tokenCount: String
        onSaleCount:String
        primaryContract:String
        tokenSetId: String
        collectionBidSupported:Boolean
        contractKind: String
        rank: Rank
        volume: Volume
        volumeChange: Change
        floorSale: Change
        floorSaleChange:Change
        floorAsk: FloorAsk
    }
    type RootQuery {
        collections:[Collection]
        collection(id:String!):Collection
        tokens(collectionId:String!):[Token]
        token(id:String!):Token
    }  
    schema {
        query: RootQuery
    }
`);
