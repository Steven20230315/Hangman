import * as styled from 'styled-components';

// For @styled/typescript-styled-plugin plugin to work, I need to add styled before createGlobalStyle. Otherwise, auto-formatting will not work. (css or sty also works)
const GlobalStyles = styled.createGlobalStyle`
	body,
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: monospace;
		border-radius: 5px;
	}

	a {
		text-decoration: none;
	}
`;

export default GlobalStyles;
