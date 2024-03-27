import styled from 'styled-components';

const KeyboardWrapper = styled.div`
	margin: 0 6rem;
	align-self: stretch;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
	gap: 0.8rem;

	.letter_btn {
		width: 100%;
		border: 2px solid black;
		background-color: none;
		/*  The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box. This means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio. */
		aspect-ratio: 1/1;
		font-size: 1.2rem;
		font-weight: bold;
		padding: 0.3rem;
		cursor: pointer;
		color: black;

		/* hover and focus effect only works when the button is not disabled */
		&:hover:not(:disabled),
		&:focus:not(:disabled) {
			background-color: hsl(200, 100%, 50%);
			color: white;
		}
	}

	.active {
		background-color: hsl(200, 100%, 50%);
		color: white;
	}

	.inactive {
		opacity: 0.3;
	}
`;

export default KeyboardWrapper;
