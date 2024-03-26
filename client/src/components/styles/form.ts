import styled from 'styled-components';

const FormWrapper = styled.form`
	border-radius: 5px;
	* {
		font-family: sans-serif;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 300px;
		min-height: 200px;
		gap: 1rem;
		border: 1px black solid;
		border-radius: 5px;
		margin: 1rem auto;
		padding: 1rem;
	}
	button {
		width: 100%;
		padding: 0.5rem;
		background-color: #2e8559;
		border: none;
		color: #fdfff0;
	}

	input {
		padding: 0.5rem;
		outline: none;
		border: 1px black solid;
		width: 100%;
		background-color: white;
	}

	p {
		font-size: 0.8rem;

		& > span {
			color: green;
		}
	}
`;

export default FormWrapper;
