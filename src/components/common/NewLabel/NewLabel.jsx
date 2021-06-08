import styled from "styled-components";

const StyledNewLable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73px;
    height: 26px;
    background: linear-gradient(261.65deg, #EFBB37 -3.95%, #CF9E1F 109.44%);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
`;

const NewLabel = (props) => {
    return (
        <StyledNewLable>{props.children}</StyledNewLable>
    );
}

export default NewLabel;