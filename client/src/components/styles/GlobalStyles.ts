import * as styled from 'styled-components';

// For @styled/typescript-styled-plugin plugin to work, I need to add styled before createGlobalStyle. Otherwise, auto-formatting will not work. (css or sty also works)
const GlobalStyles = styled.createGlobalStyle`
	body,
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: monospace;
	}

	body {
		width: 100vw;
		height: 100vh;
	}

	#root {
		width: 100%;
		height: 100%;
	}
	form,
	input,
	button {
		border-radius: 5px;
	}

	li {
		list-style-type: none;
	}

	a {
		text-decoration: none;
	}

	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: yellow;
		height: calc(100vh - 35px);
		max-height: 600px;
		width: 1000px;
		margin: 1rem auto;
		/* height: 100%; */
		/* width: 100%; */
		border: 1px black solid;
	}
`;

export default GlobalStyles;
