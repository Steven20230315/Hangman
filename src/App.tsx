function App() {
	const [word, setWord] = useState('');

	// Track the letters guessed by the player
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	// From guessedLetters, filter out the guessed letters that are not in the word.
	//
	const incorrectLetters = guessedLetters.filter(
		(letter) => !word.includes(letter)
	);
	// I'm not sure if I need this
	useEffect(() => {
		setWord(wordGenerator());
	}, []);
	return (
		<>
			<h1>Hi</h1>
		</>
	);
}

export default App;
