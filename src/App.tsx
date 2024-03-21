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
	// useCallback to prevent unnecessary re-renders.
	// Since this function is included in the dependency array of the useEffect hook, you need to use useCallback to prevent unnecessary re-renders.
	const handleAddGuessedLetter = useCallback(
		(letter: string) => {
			// If the letter has already been guessed, ignore it. Else, add it to guessedLetters. This is to prevent duplicates letters in the guessedLetters array.
			if (guessedLetters.includes(letter)) return;
			setGuessedLetters((prev) => [...prev, letter]);
		},
		[guessedLetters]
	);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
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
		<>
			<h1>Hi</h1>
		</>
	);
}

export default App;
