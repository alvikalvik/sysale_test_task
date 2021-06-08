import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button/Button";
import ComparationLabel from "../common/ComparationLabel/ComparationLabel";
import NewLabel from "../common/NewLabel/NewLabel";
import OnePlusOneLabel from "../common/OnePlusOneLabel/OnePlusOneLabel";
import GoodsCount from "./GoodsCount";
import GoodsImg from "./GoodsImg";
import GoodsVolume from "./GoodsVolume";
import { ImgWrapper } from "./GoodsImg"
import GoodsColor from "./GoodsColor";

const GoodsLi = styled.li`
    position: relative;
    padding: 45px;    
    background-color: #F8FAFC;
    border-radius: 25px;
    transition: filter 0.6s;

    &:hover {
        filter: drop-shadow(0px 4px 45px #C3D4E4);
    }

    &:hover ${ImgWrapper} img {
        transform: rotate(-15deg) scale(1.4);
        &:hover {
            transform: none;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }         
    }
`;

const GoodsTitle = styled.h3`
    margin: 25px 0 0 0;
    padding: 0;
    font-weight: 500;
    font-size: 24px;    
    text-align: center;
    color: #2C2C2C;
`;

const GoodsDescr = styled.div`
    margin: 10px 0 0 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #2C2C2C;
`;

const GoodsColorPriceWrapper = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0 0 0;
    min-height: 45px;    
`;

const GoodsPrice = styled.div`    
    font-weight: 600;
    font-size: 18px;    
    color: #000000;
`;

const CountButtonWrapper = styled.div`    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 39px;
    margin-top: 25px;
    padding: 0 16px;
`;

const NewLabelWrapper = styled.div`    
    position: absolute;
    top: 46px;
    left: 31px;
    z-index: 10;
`;

const OnePlusOneLabelWrapper = styled.div`    
    position: absolute;
    top: 63px;
    left: 31px;
    z-index: 9;
`;

const ComparationLabelWrapper = styled.div`    
    position: absolute;
    top: 35px;
    right: 31px;
    z-index: 10;
`;

const GoodsItem = (props) => {    
    const [isColorsVisible, setIsColorsVisible] = useState(false);
    const itemData = props.itemData;

    const price = props.itemData.prices[props.itemData.volume] * props.itemData.count;      

    return (
        <GoodsLi>
            <GoodsImg
                src={itemData.img}
                alt={itemData.title}                
                hidedSrc={itemData.hidedImg}                
            />
            <GoodsTitle>{itemData.title}</GoodsTitle>            
            <GoodsDescr>{itemData.description}</GoodsDescr>  
                      
            <GoodsColorPriceWrapper>
                <GoodsColor
                    itemData={itemData}
                    isColorsVisible={isColorsVisible}
                    setIsColorsVisible={setIsColorsVisible}
                    setItemColor={props.setItemColor}
                />
                <GoodsPrice>{price} грн</GoodsPrice>
            </GoodsColorPriceWrapper>

            <GoodsVolume
                volume={itemData.volume}
                availableVolumes={itemData.availableVolumes}
                id={itemData.id}
                setItemVolume={props.setItemVolume}
            />
            <CountButtonWrapper>
                <GoodsCount
                    id={itemData.id}
                    count={itemData.count}
                    maxCount={itemData.maxCount}
                    setItemCount={props.setItemCount}
                />
                <Button>Купить</Button>
            </CountButtonWrapper>
            {itemData.isNew
                ? <NewLabelWrapper>
                    <NewLabel>New</NewLabel>
                  </NewLabelWrapper>
                : null
            }
            {itemData.isOnePlusOne
                ? <OnePlusOneLabelWrapper>
                    <OnePlusOneLabel>1+1</OnePlusOneLabel>
                  </OnePlusOneLabelWrapper>
                : null
            }
            
            <ComparationLabelWrapper>
                <ComparationLabel
                    isInComparation={itemData.isInComparation}
                    inComparationCount={props.inComparationCount}
                    handleClick={props.toggleIsInComparation}
                />
            </ComparationLabelWrapper>
        </GoodsLi>
    );
}

export default GoodsItem;