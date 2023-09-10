import React from "react";
import styled from "styled-components";


const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    border: none;
    min-width: 70px;
    height: 50px;
    background: #F9F8F8;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    font-family: 'Poppins';
    font-style: bold;
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    padding: 10px;
    margin-bottom: 18px;
    color: rgba(0, 0, 0, 0.7);
`

const KeywordBox = (props) => {

    return (
        <ItemBox>
            {props?.value}
        </ItemBox>
    )
}

export default KeywordBox;