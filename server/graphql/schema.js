const { buildSchema } = require("graphql");

module.exports = buildSchema(`
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
    type LastBuy{
        value:String!
    }
    type Collection{
        _id: String
        name:String
        slug:String
        image:String
        banner:String
        discordUrl:String
        externalUrl:String
        twitterUsername:String
        openseaVerificationStatus:Boolean
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
        lastBuy:LastBuy,
    }    
    input CollectionInputData{
        name:String!
    }  
    type RootQuery {
        collections:[Collection]
    }
    type RootMutation {
        updateCollection(id: ID!, collectionInput:CollectionInputData): Collection!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
