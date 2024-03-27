import styled from 'styled-components';

const CategoriesWrapper = styled.div`
	background-color: green;
	/* border: 1px white solid; */
	width: 100%;
	height: 100%;
	color: white;
	padding: 0.5rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.5rem;

	li {
		background-color: black;
	}
`;

export default CategoriesWrapper;
