import type {MSG} from '../types/msg';

export async function getMessages(renderID: string): Promise<MSG[]> {
	await Promise.resolve();

	// Const renderID = 'clg2m4t7b00b7bu9b0einnxnm';
	const renderPath = 'renders';
	const renderLink = `${process.env.BACKEND}/${renderPath}/${renderID}`;
	// Const id = 'clfvosjth0001buwcv1r30fy8';
	// const newLink = `http://localhost:3000/api/trpc/projects.getMessagingProjectById?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22id%22%3A%22${id}%22%7D%7D%7D`;
	const videoId = await fetch(renderLink)
		.then((response) => response.json())
		.then((data: any) => {
			const videoId = data.data.messagingVideoId as string;
			return videoId;
		});

	const videoPath = 'video';
	const videoLink = `${process.env.BACKEND}/${videoPath}/${videoId}`;

	return fetch(videoLink)
		.then((response) => response.json())
		.then((data: any) => {
			return data.messages;
		});
}
