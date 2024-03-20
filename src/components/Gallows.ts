import styled from 'styled-components';

interface GallowsProps {
	$backgroundColor?: string;
	$size?: {thickness: number, length: number};
}

type Size = {
	$size?: GallowsProps['$size'];
}

// helper functions to calculate styles. It reduces the amount of code, and makes it easier to read or modify
const thickness = ({ $size }: Size) => `${$size ? $size.thickness : 10}px`;
const length = (ratio: number)=>({ $size }: Size) => `${$size ? $size.length * ratio : 250}px`;
const marginLeft = ({ $size}: Size) => `${$size ? ($size.length - $size.thickness) / 2 : 120}px`;

const aLength = 350;
const aThickness = 40;
const containerWidth = (aLength - aThickness) / 2 + aLength * 0.8;
const containerHeight = aThickness * 2 + aLength * 1.6;
const headWidth = aThickness * 2 + aLength * 0.2;
console.log(containerWidth);
console.log(containerHeight);
console.log(headWidth);

const GallowsContainer = styled.div<GallowsProps>`
	position: relative;

	.base {

		height: ${thickness};
		width: ${length(1)};
	
	}

	.pillar {
		height: ${length(1.6)};
		width: ${thickness};
		margin-left: ${marginLeft};
	}

	.top-bar {
		height: ${thickness};

		width: ${length(0.8)};
		margin-left: ${marginLeft};
	}

	.rope {
		height: ${length(0.4)};
		width: ${thickness };
		position: absolute;
		top: ${thickness };
		right: 0px;
	}

	.head{
		/* length of the GallowsContainer is (length - thickness) / 2 + length *0.8 */
		width: ${length(0.2)};
		height: ${length(0.2)};
		border: ${({$size, $backgroundColor}) => `${$size? $size.thickness : 10}px solid ${$backgroundColor || 'black'}`};
		border-radius: 100%;
		position: absolute;
		top: ${length(0.4)};;
		/* right: -39px; */
		right: -37px;
	}

	.base, .top-bar, .rope, .pillar {
		background-color: ${(props) => props.$backgroundColor || 'black'};
	}
`;

export default GallowsContainer;
