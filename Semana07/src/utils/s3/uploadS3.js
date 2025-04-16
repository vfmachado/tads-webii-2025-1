import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import fs from 'fs';

const client = new S3Client({ 
    credentials: {
        accessKeyId: '',
        secretAccessKey: ''
    },    
    region: "us-east-1" 
});

const uploadToS3 = async (file) => {

    const fileStream = fs.readFileSync(file.filepath);

    const input = {
        Body: fileStream.buffer,
        Bucket: "tads-2025-webii",
        Key: "env/ " + file.newFilename
    };
    const command = new PutObjectCommand(input);
    const response = await client.send(command);
    return response;
}
export { uploadToS3 }