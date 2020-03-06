export default () => ({
    "env":{
        "port": parseInt(process.env.APP_PORT, 10) || 3000
    },
    "mongourl": `mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`,
    //"mongourl": `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?authSource=${process.env.DATABASE_AUTHSOURCE}`,
    "cors": {
        "credentials": true,
        "origin": process.env.APP_CORSORIGINS || "*"
    },
    "auth":{
        "usercol": process.env.AUTH_USERCOL || "_user",
        "secret": process.env.AUTH_SECRET || "secret"
    },
    "schemas":{
        "dir":"./jsonschemas"
    },
    "import":{
        "dir":"./import",
        "importcol":"import"
    },
    "assets": {
        "dir":"./asset/uploads/files",
        "thumbs":"./asset/uploads/thumbs",
        "IIIFDropZone":""
    },
    "version": "1",
    "meta": {
        "title":"",
        "description":"",
        "copyright-software": "MIT License",
        "copyright-data": "CC BY 2.0",
        "authors-software": [
            ""
        ],
        "authors-data": [
            ""
        ]
    }
});