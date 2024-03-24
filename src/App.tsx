import { useState, useEffect, useCallback } from 'react';
import words from './wordList.json';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import HangmanState from './components/HangmanScoreboard';

const wordGenerator = () => {
	return words[Math.floor(Math.random() * words.length)];
};
// https://www.youtube.com/watch?v=-ONUyenGnWw

function App() {
	// set the word for player to guess
	const [word, setWord] = useState('');

	// Track the letters guessed by the player
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	// From guessedLetters, filter out the guessed letters that are not in the word.
	//
	const incorrectLetters = guessedLetters.filter(
		(letter) => !word.includes(letter)
	);
	// TODO: I'm considering to create a separate file to manage the state of the game. Because in the future, I will add more features to the game. If all the features are in one file, it will make it easier to manage the state of the game.
	const isLoser = incorrectLetters.length >= 6;
	// Check if every letter in the word has been guessed. The every function will only return true if every element in the array passes the test.
	const isWinner = word
		.split('')
		.every((letter) => guessedLetters.includes(letter));

	// I'm not sure if I need this
	useEffect(() => {
		setWord(wordGenerator());
	}, []);

	// useCallback to prevent unnecessary re-renders.
	// Since this function is included in the dependency array of the useEffect hook, you need to use useCallback to prevent unnecessary re-renders.
	const handleAddGuessedLetter = useCallback(
		(letter: string) => {
			// If the letter has already been guessed, ignore it. Else, add it to guessedLetters. This is to prevent duplicates letters in the guessedLetters array.
			if (guessedLetters.includes(letter) || isLoser || isWinner) return;
			setGuessedLetters((prev) => [...prev, letter]);
		},
		[guessedLetters, isLoser, isWinner]
	);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			// Convert the key to lower case, to make it case-insensitive
			const key = e.key;
			// If it's not a letter, ignore it
			if (key !== 'Enter') return;

			e.preventDefault();
			setGuessedLetters([]);
			setWord(wordGenerator());
		};
		document.addEventListener('keypress', handler);
		// This will clean up the event listener when the component unmounts to prevent memory leaks.
		// The event listener will not be replaced by adding a new one. If you didn't remove the event listener, there will be multiple event listeners attached to the elements.
		return () => {
			document.removeEventListener('keypress', handler);
		};
	}, [handleAddGuessedLetter]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			// Convert the key to lower case, to make it case-insensitive
			const key = e.key.toLowerCase();
			// If it's not a letter, ignore it
			if (!key.match(/^[a-z]$/)) return;

			e.preventDefault();
			handleAddGuessedLetter(key);
		};
		document.addEventListener('keypress', handler);
		// This will clean up the event listener when the component unmounts to prevent memory leaks.
		// The event listener will not be replaced by adding a new one. If you didn't remove the event listener, there will be multiple event listeners attached to the elements.
		return () => {
			document.removeEventListener('keypress', handler);
		};
	}, [handleAddGuessedLetter]);

	return (
		<div className='main'>
			{/* <HangmanState /> */}
			<div style={{ fontSize: '2rem', textAlign: 'center' }}>
				{isWinner
					? 'Winner! - Refresh to try again'
					: isLoser
					? 'Nice try! - Refresh to try again'
					: 'Hangman'}
			</div>
			<HangmanDrawing numberOfIncorrectGuesses={incorrectLetters.length} />
			<HangmanWord
				reveal={isLoser}
				word={word}
				guessedLetters={guessedLetters}
			/>
			<Keyboard
				activeLetters={guessedLetters.filter((letter) => word.includes(letter))}
				inactiveLetters={incorrectLetters}
				addGuessedLetter={handleAddGuessedLetter}
				disabled={isWinner || isLoser}
			/>
		</div>
	);
}

export default App;

