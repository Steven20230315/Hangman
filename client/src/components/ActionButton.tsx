type ActionFunctionProps = {
	value: string;
};

export default function ActionButton({ value }: ActionFunctionProps) {
	return (
		<button type='submit' name='intent' value={value}>
			{value}
		</button>
	);
}
