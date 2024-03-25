import Wrapper from '../assets/wrappers/KeyboardWrapper';

const KEYS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

type KeyboardProps = {
	// An array that stores the
	activeLetters: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
}: KeyboardProps) {
	return (
		<Wrapper>
			{KEYS.map((key) => {
				const isActive = activeLetters.includes(key);
				const isInactive = inactiveLetters.includes(key);
				return (
					<button
						type='button'
						onClick={() => addGuessedLetter(key)}
						key={key}
						className={`letter_btn ${isActive ? 'active' : ''} ${
							isInactive ? 'inactive' : ''
						}`}
					>
						{key.toUpperCase()}
					</button>
				);
			})}
		</Wrapper>
	);
}
