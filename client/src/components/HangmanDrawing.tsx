import Gallows from '../assets/wrappers/Gallows.ts';

type HangmanDrawingProps = {
	numberOfIncorrectGuesses: number;
};

const HEAD = (
	<div className='head'>
		<div className='right-eye eye' />
		<div className='left-eye eye' />
		<div className='smile' />
	</div>
);
const BODY = <div className='body' />;
const RIGHT_ARM = <div className='right-arm limbs' />;
const LEFT_ARM = <div className='left-arm limbs' />;
const RIGHT_LEG = <div className='right-leg limbs' />;
const LEFT_LEG = <div className='left-leg limbs' />;
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export default function HangmanDrawing({
	numberOfIncorrectGuesses,
}: HangmanDrawingProps) {
	return (
		<Gallows $backgroundColor='black' $base={6}>
			{BODY_PARTS.slice(0, numberOfIncorrectGuesses)}
			<div className='rope'></div>
			<div className='top-bar'></div>
			<div className='pillar'></div>
			<div className='base'></div>
		</Gallows>
	);
}
