import { useState } from "react";
import styled from "styled-components";
import GoodsItem from "./GoodsItem";

const GoodsWrapper = styled.div`
    max-width: 1800px;
    padding: 5px;
`;

const GoodsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: grid;
    gap: 35px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 573px));    
    justify-content: center;    
`;

const Goods = (props) => {
    const [goods, setGoods] = useState([
        {
          id: 1,
          title: `Шампунь`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
          img: `img/shampoo1@2x.png`,
          hidedImg: ``,
          color: `Цвет`,
          availableColors: [
            'Желтый',
            'Красный',
            'Зеленый',
            'Цвет4',
            'Цвет5',
            'Цвет6',
            'Цвет7',
            'Цвет8',
          ],
          volume: '100',
          availableVolumes: [
            '100',
            '200',
            '300',        
          ],
          prices: {
            '100': 200,
            '200': 400,
            '300': 600, 
          },
          count: 1,
          maxCount: 9999,
          isNew: true,
          isOnePlusOne: false,
          isInComparation: false
        },
        {
          id: 2,
          title: `Шампунь`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
          img: `img/shampoo2@2x.png`,
          hidedImg: `img/hovered-shampoo2@2x.png`,
          color: `Цвет`,
          availableColors: [
            'Желтый',
            'Красный',
            'Зеленый',
            'Цвет4',
            'Цвет5',
            'Цвет6',
            'Цвет7',
            'Цвет8',
          ],
          volume: '200',
          availableVolumes: [
            '100',
            '200',
            '300',        
          ],
          prices: {
            '100': 200,
            '200': 400,
            '300': 600, 
          },
          count: 2,
          maxCount: 9999,
          isNew: false,
          isOnePlusOne: true,
          isInComparation: true
        },
        {
          id: 3,
          title: `Шампунь`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
          img: `img/shampoo3@2x.png`,
          hidedImg: `img/hovered-shampoo3@2x.png`,
          color: `Цвет`,
          availableColors: [
            'Желтый',
            'Красный',
            'Зеленый',
            'Цвет4',
            'Цвет5',
            'Цвет6',
            'Цвет7',
            'Цвет8',
          ],
          volume: '300',
          availableVolumes: [
            '100',
            '200',
            '300',        
          ],
          prices: {
            '100': 200,
            '200': 400,
            '300': 600, 
          },
          count: 3,
          maxCount: 9999,
          isNew: true,
          isOnePlusOne: true,
          isInComparation: true
        },
      ]);

    const inComparationCount = goods.reduce(
        (accumulator, item) => {
            if (item.isInComparation) {
                accumulator++;
            }
            return accumulator;                
        },
        0
    );

    const toggleIsInComparation = (id) => {        
        setGoods(state => {
            const newState = state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isInComparation: !item.isInComparation,
                    }
                }
                return item;
            });
            return newState;
        });
    }; 

    const setItemColor = (id, color) => {        
        setGoods(state => {
            const newState = state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        color
                    }
                }
                return item;
            });
            return newState;
        });
    }; 
    
    const setItemVolume = (id, volume) => {        
        setGoods(state => {
            const newState = state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        volume
                    }
                }
                return item;
            });
            return newState;
        });
    };

    const setItemCount = (id, count) => {        
        setGoods(state => {
            const newState = state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        count
                    }
                }
                return item;
            });
            return newState;
        });
    };

    const goodsItems = goods.map( item => {
        return (
            <GoodsItem
                key={item.id}
                itemData={item}
                inComparationCount={inComparationCount}
                toggleIsInComparation={() => toggleIsInComparation(item.id)}
                setItemColor={setItemColor}
                setItemVolume={setItemVolume}
                setItemCount={setItemCount}
            />
        );
    });


    return (
        <GoodsWrapper>
            <GoodsList>
                {goodsItems}
            </GoodsList>               
        </GoodsWrapper>
    );
}

export default Goods;