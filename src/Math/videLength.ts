import {MSG} from '../types/msg';

export function calcVideoLength(msgs: MSG[]) {
	return msgs.reduce(
		// (partialSum, msg) => partialSum + msg.ReadTimeFPS + msg.typeTimeFPS,
		(partialSum, msg) => partialSum + 15 + 15,
		0
	);
}
