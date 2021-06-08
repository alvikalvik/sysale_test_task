import { useState } from "react";
import styled from "styled-components";

export const ImgWrapper = styled.div`
    margin: 0 auto;
    width: 256px;
    background-color:#FFFFFF;
    border-radius: 25px;
    overflow: hidden;
    height: 261px;
    img {
        display: block;
        margin: 0 auto;
        height: 100%;
        max-width: 100%;
        object-fit: contain;
        transition: transform 0.6s;               
    }
`;

const GoodsImg = (props) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    }

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    }

    return (        
        <ImgWrapper>
            <img
                src={
                    isMouseOver
                        ? props.hidedSrc || props.src
                        : props.src
                }
                alt={props.alt}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />        
        </ImgWrapper>
    );
}

export default GoodsImg;