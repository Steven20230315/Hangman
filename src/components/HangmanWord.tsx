import Wrapper from '../assets/wrappers/HangmanWordWrapper';
import { useState } from 'react';

type HangmanWordProps = {
	word: string;
};

export default function HangmanWord({ word }: HangmanWordProps) {
	const [guessedLetters, setGuessedLetters] = useState<string[]>(['t', 'e']);
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
