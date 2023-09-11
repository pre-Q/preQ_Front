import React from "react";
import styled from "styled-components";

const ItemBox = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    box-sizing: border-box;
    border: none;
    width: 200px;
    height: 50px;
    background: #F9F8F8;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    padding: 10px;
    margin-bottom: 18px;
    color: rgba(0, 0, 0, 0.7);
`

const QuestionItem = (props) => {

    const {title} = props;

    if (title !== null) {
        var titleStr = title ? title.substr(0, 13) + "..." : '제목 없음'
    }
    return (
        <>
            <ItemBox>
                {titleStr}
            </ItemBox>
        </>
    )
}

export default QuestionItem;