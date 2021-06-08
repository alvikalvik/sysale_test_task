import styled from "styled-components";

const GoodsColorWrapper = styled.div`
    padding: 2px 0;
    width: 264px;
    min-height: 30px;
    max-height: 124px;
    background-color: #FFFFFF;
    border-radius: 30px; 
    font-weight: 500;
    font-size: 12px;
    color: #2C2C2C;
    overflow: hidden;    
`;

const GoodsColorTitle = styled.div`
    position: relative;
    padding: 0 20px;    
    height: 24px; 
    line-height: 24px;
    cursor: pointer;
    &:after {
        position: absolute;
        top: 50%;
        right: 20px; 
        content: '';
        width: 6px;
        height: 6px;
        border-left: 2px solid #2C2C2C;
        border-top: 2px solid #2C2C2C;
        transform: rotate(-135deg) translateY(50%);
        transition: transform 0.6s;
    }
`;

const GoodsColorTitleDown = styled(GoodsColorTitle)`
    &:after {       
        transform: rotate(45deg) translateY(-50%);
    }
`;

const GoodsColorItems = styled.div`
    max-height: 96px;
    overflow-y: scroll;
    scrollbar-color: #E0E9F2 #f9f9fd;
    scrollbar-width: 5px;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: #f9f9fd;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #E0E9F2;
    }

    &::-webkit-scrollbar-track {        
        border-radius: 15px;
        background-color: #f9f9fd;
    }
`;

const GoodsColorItem = styled.div`
    padding: 0 20px;   
    margin-top: 6px;
    height: 24px; 
    line-height: 24px;
    cursor: pointer;
`;

const GoodsColor = (props) => {    
    const {itemData, isColorsVisible, setIsColorsVisible} = props;    
    const GoodsColorItemList = itemData.availableColors.map(
        (item, i) => {
            return (
                <GoodsColorItem
                    key={i}
                    onClick={() => props.setItemColor(itemData.id ,item)}
                >
                    {item}
                </GoodsColorItem>
            );
        }
    ); 
    return (
        <GoodsColorWrapper>
            {isColorsVisible
                ? <GoodsColorTitleDown                       
                    onClick={() => {
                        setIsColorsVisible(!isColorsVisible);
                    }}
                    >{itemData.color}</GoodsColorTitleDown>
                : <GoodsColorTitle                        
                    onClick={() => {
                        setIsColorsVisible(!isColorsVisible);
                    }}
                    >{itemData.color}</GoodsColorTitle>
            }
            {isColorsVisible
                ? <GoodsColorItems>
                    {GoodsColorItemList}
                  </GoodsColorItems>
                : null
            }
        </GoodsColorWrapper>        
    );
}

export default GoodsColor;