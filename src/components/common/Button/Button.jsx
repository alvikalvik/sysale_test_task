import styled from "styled-components";

const StyledButton = styled.button`
    display: block;
    width: 309px;
    height: 39px;   
    background: linear-gradient(261.65deg, #EFBB37 -3.95%, #CF9E1F 109.44%);
    border-radius: 30px;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;  
    color: #FFFFFF;
    outline: none;   
    border:none;
    cursor: pointer;
    transition: filter 0.6s, background 0.6s;
    &:hover {
        background: linear-gradient(261.65deg, #E9B32C -3.95%, #BF911A 109.44%);
        filter: drop-shadow(0px 0px 20px #E8CB80);
    }
    &:active {
        background: linear-gradient(261.65deg, #FFD773 -3.95%, #E2B645 109.44%);
        filter: drop-shadow(0px 0px 20px #E8CB80);
    }
`;

const Button = (props) => {
    return (
        <StyledButton>{props.children}</StyledButton>
    );
}

export default Button;