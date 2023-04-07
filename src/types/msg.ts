export type MSG = {
	id: string;
	content: string;
	fromUser: string | null;
	index: number | null;
	isMainPerson: boolean;
	date: string | null;
	userPhotoURL: string | null;
	messagingVideoId: string | null;
};

export type optionalMSG = {
	msg: string;
	username?: string;
	isMe?: boolean;
	ReadTime?: number;
	typeTime?: number;
	date?: string;
};
