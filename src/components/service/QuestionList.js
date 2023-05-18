import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import styled from "styled-components";
import plusImg from "../../asset/plus.png";
import dummy from "../../db/data.json";
import { getCoverLetter } from "../../lib/api/service";
import { useNavigate } from "react-router-dom";

const ListBox = styled.div`
    display: flex;
    align-items: flex-center;
    flex-direction: column;
    .question-list-title{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 36px;
        color: #000000;
        margin-bottom: 10px;
    }
    .plus-button{
        border: none;
        background: none;

    }
`

const QuestionList = ({ onHandleForm, onHandleQlist }) => {

    const [qlist, setQList] = useState([])
    const onPlusQuestion = () => {
        setQList([...qlist, { id: "", question: "", answer: "" }]);

    }

    const getQlist = async () => {
        const json = await (await getCoverLetter());
        setQList(json.data.data)
    };

    useEffect(() => {
        getQlist();
    }, [])

    useEffect(() => {
        onHandleQlist(qlist)
        console.log(qlist)
    }, [qlist, onHandleQlist])

    return (
        <>
            <ListBox>
                <div className="question-list-title">
                    Question List
                </div>
                {qlist?.map((item, index) => (
                    <div onClick={() => { onHandleForm(index) }} key={item.index}>
                        <QuestionItem
                            key={item.index}
                            title={item.question}
                        />
                    </div>
                ))}
                <br />
                <button className="plus-button" onClick={onPlusQuestion}>
                    <img src={plusImg} alt="질문추가버튼" />
                </button>
            </ListBox >
        </>
    )
}

export default QuestionList;