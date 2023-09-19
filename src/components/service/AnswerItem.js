import React from "react";
import styled from "styled-components";
import StyleButton from "../common/StyleButton";
import { setCookie } from "../../lib/cookie";
import { useParams } from "react-router-dom";

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 553px;
    // height: 133.1px;
    background: #FFFFFF;
    border: 3px solid #F9F8F8;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
    .button-wrapper{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
`

const AnswerItem = (props) => {

    const { text, saveTailQuestion } = props;

    const { id } = useParams();

    const handleQuestion = async (tail) => {
        setCookie('tail', tail);
        window.location.replace(`/application/${id}/child/new`);
    }

    return (
        <ItemBox>
            {text}
            <div className="button-wrapper">
                <StyleButton width="140px" size="20px" onClick={() => handleQuestion(text)}>답변하기</StyleButton>
            </div>
        </ItemBox>
    )
}

export default AnswerItem;