const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = new aws.S3();

aws.config.update({
    secretAccessKey: process.env.AW_KEY,
    accessKeyId: process.env.AWS_SECRET_KEY
})

const ImageFilter = () =>{

}




