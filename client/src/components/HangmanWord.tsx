import Wrapper from '../assets/wrappers/HangmanWordWrapper';

type HangmanWordProps = {
	word: string;
	guessedLetters: string[];
};

export default function HangmanWord({
	word,
	guessedLetters,
}: HangmanWordProps) {
	return (
		<Wrapper>
			{word.split('').map((letter, index) => (
				// Generally, It's not recommended to use index as key. But in this case, it's okay.
				<span className='letter_underline ' key={index}>
					<span
						className={guessedLetters.includes(letter) ? 'guessed' : 'hidden'}
					>
						{letter}
					</span>
				</span>
			))}
		</Wrapper>
	);
}
