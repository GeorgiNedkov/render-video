// /* eslint-disable no-redeclare */
// import {MSG, optionalMSG} from '../types/msg';

// export function msgTransformer(msg: optionalMSG): MSG;
// export function msgTransformer(msgs: optionalMSG[]): MSG[];
// export function msgTransformer(
// 	msgOrMsgs: optionalMSG | optionalMSG[]
// ): MSG | MSG[] {
// 	if (Array.isArray(msgOrMsgs)) {
// 		return msgOrMsgs.map((msg) => msgTransformer(msg));
// 	}

// 	const fps = 30;

// 	return {
// 		username: msgOrMsgs.username === undefined ? '' : msgOrMsgs.username,
// 		msg: msgOrMsgs.msg === undefined ? '' : msgOrMsgs.msg,
// 		isMe:
// 			msgOrMsgs.isMe === undefined
// 				? msgOrMsgs.username === undefined
// 				: msgOrMsgs.isMe,
// 		ReadTimeFPS:
// 			(msgOrMsgs.ReadTime === undefined ? 1 : msgOrMsgs.ReadTime) * fps,
// 		typeTimeFPS:
// 			(msgOrMsgs.typeTime === undefined ? 0 : msgOrMsgs.typeTime) * fps,
// 	};
// }
