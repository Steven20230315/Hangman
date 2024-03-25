import Wrapper from '../assets/wrappers/HangmanScoreboardWrapper';
import { useState } from 'react';
export default function HangmanScoreboard() {
	const [round, setRound] = useState(1);
	const [wins, setWins] = useState(2);
	const [losses, setLosses] = useState(3);
	return (
		<Wrapper>
			<div>Round {round}</div>
			<div className='score'>
				<span className='win'>{wins}</span>:
				<span className='lose'>{losses}</span>
			</div>
		</Wrapper>
	);
}
