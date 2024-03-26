import styled from "styled-components";

type GallowsProps = {
  $backgroundColor?: string;
  $base?: number;
};

type Base = {
  $base?: GallowsProps["$base"];
};

// Higher-order function that capture $base
const lengthBaseOnBase =
  ({ $base = 10 }: Base) =>
  (ratio: number) =>
    `${$base * ratio * 25}px`;

const marginLeftBaseOnBase = ({ $base = 10 }: Base) => `${$base * 12}px`;

const headBorderBaseOnBase = ({
  $base = 10,
  $backgroundColor = "black",
}: GallowsProps) => `${$base * 0.5}px solid ${$backgroundColor}`;
// helper functions to calculate styles. It reduces the amount of code, and makes it easier to read or modify
const thickness1 = ({ $base = 10 }: Base) => `${$base}px`;
const thickness2 = ({ $base = 10 }: Base) => `${$base / 2}px`;

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
  /* >* {box-sizing: border-box;} */
  .base {
    height: ${thickness1};
    width: ${({ $base }) => lengthBaseOnBase({ $base })(1)};
  }

  .pillar {
    height: ${({ $base }) => lengthBaseOnBase({ $base })(1.6)};
    width: ${thickness1};
    margin-left: ${marginLeftBaseOnBase};
  }

  .top-bar {
    height: ${thickness1};

    width: ${({ $base }) => lengthBaseOnBase({ $base })(0.8)};
    margin-left: ${marginLeftBaseOnBase};
  }

  .rope {
    height: ${({ $base }) => lengthBaseOnBase({ $base })(0.2)};
    width: ${thickness1};
    position: absolute;
    top: ${thickness1};
    right: 0px;
  }

  /* Since the size of the container is determined by base,pillar,top-bar. You can use relative units like % to adjust the rest of the layout, and still maintain the ratio */
  .head {
    /* When border-radius is set to 100%, the browser adjust the border width to ensure that it fits within the rounded corner. The actual border width is 9.6px, not 10px. I set box-sizing to border-box to make layout easier */
    box-sizing: border-box;
    width: 22%;
    height: 17%;
    border: ${headBorderBaseOnBase};
    border-radius: 100%;
    position: absolute;
    /* top: ${({ $base }) => lengthBaseOnBase({ $base })(0.23)}; */
    top: 13.6%;
    /* right: ${({ $base }) => lengthBaseOnBase({ $base })(-5.95 / 50)}; */
    right: -9.2%;
    &:hover > .eye {
      width: 20%;
      height: 20%;
    }
  }

  .body {
    width: ${thickness2};
    /* height: ${({ $base }) => lengthBaseOnBase({ $base })(100 / 250)}; */
    height: 24%;
    position: absolute;
    /* top:${({ $base }) => lengthBaseOnBase({ $base })(12.5 / 25)}; */
    top: 30%;
    /* right:  ${({ $base }) => lengthBaseOnBase({ $base })(3 / 250)}; */
    right: 1%;
  }
  .eye {
    height: 20%;
    width: 17%;
    border-radius: 100%;
    top: 23%;
    position: absolute;
    &.right-eye {
      right: 21%;
    }
    &.left-eye {
      left: 21%;
    }
    & .head:hover {
      width: 20%;
    }
  }

  .smile {
    width: 55%;
    height: 5%;
    border-bottom: 3px solid black;
    border-radius: 10px;
    position: absolute;
    top: 70%;
    right: 21%;
  }
  /* TODO: Add frowny face and smiley face animation */
  .frown {
  }

  .limbs {
    width: ${({ $base }) => lengthBaseOnBase({ $base })(100 / 250)};
    height: ${thickness2};
    position: absolute;
    /* top:${({ $base }) => lengthBaseOnBase({ $base })(15 / 25)}; */
    top: 38%;
  }

  .right-arm {
    right: -30%;
    rotate: -30deg;
    transform-origin: left bottom;
  }

  .left-arm {
    right: 2%;
    rotate: 30deg;
    transform-origin: right bottom;
  }

  .right-leg {
    top: 52%;
    right: -28.8%;
    rotate: 60deg;
    transform-origin: left bottom;
  }

  .left-leg {
    top: 52%;
    right: 1%;
    rotate: -60deg;
    transform-origin: right bottom;
  }

  .base,
  .top-bar,
  .rope,
  .pillar,
  .body,
  .right-arm,
  .left-arm,
  .right-leg,
  .left-leg,
  .frown,
  .left-eye,
  .right-eye {
    background-color: ${(props) => props.$backgroundColor || "black"};
  }
`;

export default GallowsContainer;
