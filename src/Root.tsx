import {delayRender, getInputProps} from 'remotion';
import {continueRender} from 'remotion';
import {useEffect, useState} from 'react';
import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {calcVideoLength} from './Math/videLength';
import './style.css';
import {MSG} from './types/msg';
import {getMessages} from './db/getMessages';

export const RemotionRoot: React.FC = () => {
	const props = getInputProps();
	const [handle] = useState(() => delayRender());
	const [videoInfo, setVideoInfo] = useState<MSG[]>([]);

	const [duration, setDuration] = useState<number>(300);
	const renderID =
		(props?.renderId as string | undefined) ?? '6408d8260ea6afe7fa234221';

	useEffect(() => {
		getMessages(renderID).then((messages) => {
			if (messages) {
				// Const m = msgTransformer(msgs);
				setVideoInfo(messages);
				setDuration(calcVideoLength(messages));
				continueRender(handle);
			}
		});
	}, []);

	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={duration}
				fps={30}
				width={360}
				height={640}
				defaultProps={{
					msgs: videoInfo,
				}}
			/>
		</>
	);
};
