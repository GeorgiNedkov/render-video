import {AbsoluteFill} from 'remotion';
import {Chat} from './components/chatApp';
import {MSG} from './types/msg';

export const MyComposition = ({msgs}: {msgs: MSG[]}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Chat msgs={msgs} />
		</AbsoluteFill>
	);
};
