import styled from "styled-components";

const CountWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 32px;
    width: 94px;
    height: 39px;
    background: #E2E9F0;
    border-radius: 30px;
    flex-shrink: 0;
    font-weight: normal;
    line-height: 39px;
    font-size: 20px;
    color: #2C2C2C;
`;

const CountButton = styled.button`
    display: block;
    width: 38px;
    height: 38px;    
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
`;

const CountText = styled.div`
    margin: 0 5px;
`;

const GoodsCount = (props) => {
    const {id, count, maxCount, setItemCount} = props;

    const handleMinusClick = () => {
        if (count <= 1) {
            return null;
        }

        setItemCount(id, count - 1)
    }

    const handlePlusClick = () => {
        if (count >= maxCount) {
            return null;
        }

        setItemCount(id, count + 1)
    }

    return (
        <CountWrapper>
            <CountButton
                onClick={handleMinusClick}
                disabled={count <= 1}
            >-</CountButton>
            <CountText>{count}</CountText>               
            <CountButton
                onClick={handlePlusClick}
                disabled={count >= maxCount}
            >+</CountButton>         
        </CountWrapper>
    );
}

export default GoodsCount;