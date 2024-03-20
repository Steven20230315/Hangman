import Wrapper from '../assets/wrappers/KeyboardWrapper';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export default function Keyboard() {
	return (
		<Wrapper>
			{LETTERS.map((letter, index) => (
				<button className='letter_btn' key={index}>{letter}</button>
			))}
		</Wrapper>
	);
}
