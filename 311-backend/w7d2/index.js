
const fs = require("fs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'aca-311',
  keyFilename: './aca-311-d864d06c299f.json'
})


storage.bucket("aca-311-files").upload("./bruce.jpg", {
    gzip: true,
    metadata: {
        cacheControl: 'public, max-age=31536000',
    },
}).then(()=>{
    console.log("file uploaded")
});