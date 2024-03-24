import Wrapper from '../assets/wrappers/HangmanWordWrapper';

type HangmanWordProps = {
	word: string;
	guessedLetters: string[];
	reveal: boolean;
};

export default function HangmanWord({
	word,
	guessedLetters,
	reveal,
}: HangmanWordProps) {
	return (
		<Wrapper>
			{word.split('').map((letter, index) => (
				// Generally, It's not recommended to use index as key. But in this case, it's okay.
				<span className='letter_underline ' key={index}>
					<span
						className={
							guessedLetters.includes(letter) || reveal ? 'guessed' : 'hidden'
						}
						style={{
							color:
								!guessedLetters.includes(letter) && reveal ? 'red' : 'black',
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</Wrapper>
	);
}
