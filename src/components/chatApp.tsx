import {interpolate, staticFile} from 'remotion';
import {Img} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {MSG} from '../types/msg';

export const Chat = ({msgs}: {msgs: MSG[]}) => {
	const frame = useCurrentFrame();
	const {height, fps} = useVideoConfig();
	return (
		<>
			<div className="w-full h-full bg-white grow-0 flex flex-col">
				<Navigation />
				<div className="flex items-end grow-1 w-full h-full self-stretch overflow-hidden">
					<div className="flex flex-col p-0 w-full">
						<MessagesBox msgs={msgs} />
					</div>
				</div>
				<SendingMessages />
			</div>
		</>
	);
};

const Navigation: React.FC = () => {
	return (
		<nav className="w-full h-14 bg-white flex p-1 shadow">
			{/* <Img src={staticFile('back.png')} className="w-auto h-auto m-1" /> */}
			<div className="mr-2">
				<ProfilePicture Active />
			</div>
			<div className="flex items-center">
				<div className="flex flex-col">
					<div className="text-lg leading-5 font-bold">Name</div>
					<div className="leading-4 font-light">Active Now</div>
				</div>
			</div>
			<div className="ml-auto flex gap-2 items-center">
				<PhoneSvg />
				<CameraSvg />
				<InfoSvg />
			</div>
		</nav>
	);
};

const ProfilePicture = ({size, Active}: {size?: number; Active?: boolean}) => {
	return (
		<>
			<div className="w-full h-full">
				<div className="relative h-full">
					<div className="overflow-hidden rounded-full">
						<Img
							style={{width: `${size ? size : 40}px`}}
							src={staticFile('profile.png')}
						/>
					</div>
					{Active && (
						<span className="bg-green-600 w-5 h-5 rounded-full border-white border-4 absolute right-[-4px] bottom-[-4px] " />
					)}
				</div>
			</div>
		</>
	);
};
const PhoneSvg: React.FC = () => {
	return (
		<>
			<svg height="34px" role="presentation" viewBox="-5 -5 30 30" width="34px">
				<path
					d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648a15.9 15.9 0 011.713 1.147c.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
					fill="#0084ff"
				/>
				<path
					d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648.824.484 1.394.898 1.713 1.147.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
					fill="none"
					stroke="#0084ff"
				/>
			</svg>
		</>
	);
};

const CameraSvg: React.FC = () => {
	return (
		<>
			<svg height="34px" role="presentation" viewBox="-3 -5 30 30" width="34px">
				<path
					d="M19.492 4.112a.972.972 0 00-1.01.063l-3.052 2.12a.998.998 0 00-.43.822v5.766a1 1 0 00.43.823l3.051 2.12a.978.978 0 001.011.063.936.936 0 00.508-.829V4.94a.936.936 0 00-.508-.828zM10.996 18A3.008 3.008 0 0014 14.996V5.004A3.008 3.008 0 0010.996 2H3.004A3.008 3.008 0 000 5.004v9.992A3.008 3.008 0 003.004 18h7.992z"
					fill="#0084ff"
				/>
				<circle className="x1xgahvj" cx="24" cy="10" r="2" />
			</svg>
		</>
	);
};

const InfoSvg: React.FC = () => {
	return (
		<>
			<div className="p-1.5">
				<svg
					height="24px"
					name="icon"
					role="presentation"
					viewBox="0 0 36 36"
					width="24px"
				>
					<g transform="translate(18,18)scale(1.2)translate(-18,-18)">
						<path
							d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z"
							fill="#0084ff"
							stroke="#0084ff"
						/>
					</g>
				</svg>
			</div>
		</>
	);
};

const MyMessage = ({msg}: {msg: string}) => {
	return (
		<div className="flex mt-[2px]">
			<div className="px-[10px]" />
			<div className="flex flex-row-reverse w-full">
				<div className="px-[6px]" />
				<div className="rounded-2xl bg-[#1877F2] p-3 text-white font-light self-stretch max-w-[250px] font-sans text-sm break-all">
					{msg}
				</div>
				<div className="flex self-stretch flex-1">
					<div className="" />
				</div>
			</div>
		</div>
	);
};

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

const OthersMessage = ({children}: Props) => {
	return (
		<div className="flex flex-row-reverse mt-[2px]">
			<div className="px-[10px]" />
			<div className="flex w-full h-full">
				<div className="flex flex-col items-stretch m-1">
					<div className=" grid place-items-center w-fit h-[40px]">
						<div>
							<ProfilePicture size={30} />
						</div>
					</div>
				</div>
				<div className=" rounded-2xl bg-[#E4E6EB] p-3 text-black font-light self-stretch max-w-[250px] font-sans text-sm break-all">
					{children}
				</div>
				<div className="flex self-stretch flex-1" />
			</div>
		</div>
	);
};

const MsgSeparation = () => {
	return <div className="h-[7px] w-full" />;
};

const SendingMessages = () => {
	return (
		<>
			<div>
				<MsgSeparation />
				<Img src={staticFile('searchBar.png')} className="w-full h-auto" />
			</div>
		</>
	);
};

const Wave = ({frames}: {frames: number}) => {
	const y1 = interpolate((frames - 0) % 15, [0, 5, 10, 15], [0, -14, 0, 0]);
	const y2 = interpolate((frames - 2) % 15, [0, 5, 10, 15], [0, -14, 0, 0]);
	const y3 = interpolate((frames - 4) % 15, [0, 5, 10, 15], [0, -14, 0, 0]);

	return (
		<div className="flex gap-1">
			<Dot y={y1} />
			<Dot y={y2} />
			<Dot y={y3} />
		</div>
	);
};

const Dot = ({y = 0}: {y?: number}) => {
	return (
		<span
			className="inline-block my-2 w-2 h-2 rounded-full mr-[1px] bg-gray-900"
			style={{transform: `translateY(${y}px)`}}
		/>
	);
};

const Date = ({date}: {date: string}) => {
	return (
		<>
			<div className="flex">
				<div>{date}</div>
			</div>
		</>
	);
};

const MessagesBox = ({msgs}: {msgs: MSG[]}) => {
	let frames = useCurrentFrame();
	const {fps} = useVideoConfig();
	let typeBoxes = 0;
	return (
		<>
			{msgs.map((msg, i) => {
				if (frames - 15 > 0) {
					frames -= 15 + 15;

					if (msg.isMainPerson) {
						return (
							<div key={`msg-${i}`}>
								{msg.date && <Date date={msg.date} />}
								<MyMessage key={`myMsg-${i}`} msg={msg.content} />
							</div>
						);
					}
					return (
						<div key={`msg-${i}`}>
							{msg.date && <Date date={msg.date} />}
							<OthersMessage key={`othersMsg-${i}`}>
								{msg.content}
							</OthersMessage>
						</div>
					);
				}
				if (typeBoxes === 0) {
					typeBoxes = 1;
					if (!msg.isMainPerson && frames > 0) {
						return (
							<OthersMessage key={`othersMsg-${i}`}>
								<Wave frames={frames} />
							</OthersMessage>
						);
					}
				}
				return null;
			})}
		</>
	);
};
