import styled from "styled-components";

const VolumeWrapper = styled.div`
    margin-top: 13px;
`;

const VolumeItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2px 22px;
    cursor: pointer;
    transition: filter 0.6s;
    &:hover {
        filter: brightness(1.05);
    }
`;

const VolumeItemIndicator = styled.div`
    width: 23px;
    height: 23px;
    margin-right: 13px;
    background-color: #DEDEDE;
    border-radius: 5px;    
`;

const VolumeItemIndicatorChecked = styled(VolumeItemIndicator)`
    border: 3px solid #DEDEDE;
    background: linear-gradient(261.65deg, #EFBB37 -3.95%, #CF9E1F 109.44%);   
`;

const VolumeItemText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #000000;
`;


const GoodsVolume = (props) => {    

    const volumeItems = props.availableVolumes.map( (item,i) => {
        return (
            <VolumeItem
                key={i}
                onClick={() => props.setItemVolume(props.id, item)}
            >
                {props.volume === item
                    ? <VolumeItemIndicatorChecked />
                    : <VolumeItemIndicator />
                }                
                <VolumeItemText>{item} мл</VolumeItemText>
            </VolumeItem>
        );
    });

    return (
        <VolumeWrapper>
            {volumeItems}            
        </VolumeWrapper>
    );
}

export default GoodsVolume;