import styled from "styled-components";

const StyledComparationLabel = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    background-color: #FFFFFF;
    background-image: url('img/copmare-icon.svg');
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: #F9FAFC;
    }    
    &:active {
        background-image: url('img/compare-icon-clicked.svg');
    }    
`;

const InComparation = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #F64B33;
    font-weight: 500;
    font-size: 9px;
    color: #FFFFFF;
`;

const ComparationLabel = (props) => { 
    const handleClick = () => {
        props.handleClick();
    };
    return (
        <StyledComparationLabel
            onClick={handleClick}
        >
            {props.children}
            {props.isInComparation
                ? <InComparation>{props.inComparationCount}</InComparation>
                : null
            }            
        </StyledComparationLabel>
    );
}

export default ComparationLabel;