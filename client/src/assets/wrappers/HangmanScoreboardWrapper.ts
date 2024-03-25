import styled from "styled-components";

const HangmanScoreboardWrapper = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
font-size: 2.5rem;

.score{
    display: flex;
    gap: 0.5rem;
}

.win{
    color: green;
}

.lose{
    color: red;
}

`

export default HangmanScoreboardWrapper;