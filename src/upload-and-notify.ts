import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();
console.log(
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa',
	process.env.BACKEND,
	process.env.S3_ACCESS_KEY,
	process.env.S3_SECRET_KEY,
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa',
	'aaaaaaaa'
);
const upload = async () => {
	const s3 = new AWS.S3({
		accessKeyId: process.env.S3_ACCESS_KEY,
		secretAccessKey: process.env.S3_SECRET_KEY,
	});
	const result = await new Promise<AWS.S3.ManagedUpload.SendData>(
		(resolve, reject) => {
			// S3 ManagedUpload with callbacks are not supported in AWS SDK for JavaScript (v3).
			// Please convert to `await client.upload(params, options).promise()`, and re-run aws-sdk-js-codemod.
			s3.upload(
				{
					Bucket: 'videos-hapnap.net',
					Key: `video-${Date.now()}.mp4`,
					Body: fs.readFileSync(path.join(__dirname, '..', 'out.mp4')),
					ACL: 'public-read',
				},
				(err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				}
			);
		}
	);

	await fetch(`${process.env.BACKEND}/notify`, {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			location: result.Location,
			renderId: `${process.env.renderID}`,
		}),
	});
};

upload();
