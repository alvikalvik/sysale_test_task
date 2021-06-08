import styled from "styled-components";

const StyledOnePlusOneLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73px;
    height: 26px;
    background: linear-gradient(263.57deg, #003466 -5.31%, #3383D0 113.07%);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);    
    border-radius: 30px;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
`;

const OnePlusOneLabel = (props) => {
    return (
        <StyledOnePlusOneLabel>{props.children}</StyledOnePlusOneLabel>
    );
}

export default OnePlusOneLabel;