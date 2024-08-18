import multiparty from 'multiparty';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import fs from 'fs';
import mime from 'mime-types';
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";
import { uploadImage } from '@/config';
const bucketName = 'deepwallec2';

export default async function handle(req, res) {
  await mongooseConnect();
  // await isAdminRequest(req,res);

  const form = new multiparty.Form();
  const { files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
  console.log('length:', files.file.length);
  const client = new S3Client({
    region: 'us-east-2', // US East (Ohio) us-east-2
    credentials: {
      accessKeyId: 'AKIAQ3EGTQPA5Z4BDBOX',
      secretAccessKey: "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",
    },
  });
  const links = [];
  for (const file of files.file) {
    const ext = file.originalFilename.split('.');
    const fileName = ext[0] + Date.now() + '.' + ext[1];

    // files.length?.map((fileItem) => {
    //   console.log(fileItem)
    // })

    // let link =  await uploadImage({file , fileName})
    console.log('file - - - - - >', fileName)

    await client.send(new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: fs.readFileSync(file.path),
      ContentType: mime.lookup(file.path),
    }));
    const link = `https://${bucketName}.s3.amazonaws.com/${fileName}`;
    console.log('file - - - - - >', link)

    links.push(link);
  }
  return res.json({ links });
}

export const config = {
  api: { bodyParser: false },
};