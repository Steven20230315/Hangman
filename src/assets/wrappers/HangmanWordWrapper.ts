import styled from "styled-components";

const HangmanWordWrapper = styled.div`
display:flex;
gap:0.45rem;
font-size:3rem;
font-weight:bold;
text-transform:uppercase;

.letter_underline {
    border-bottom: 0.5rem solid black;
}

.hidden{
    visibility: hidden;
}

.guessed{
    visibility: visible;
}

.letter {
    
}
`;

export default HangmanWordWrapper