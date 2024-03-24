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
	disabled: boolean;
};

export default function Keyboard({
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
	disabled,
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
						disabled={isInactive || isActive || disabled}
					>
						{key.toUpperCase()}
					</button>
				);
			})}
		</Wrapper>
	);
}
