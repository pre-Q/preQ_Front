import React, { useDebugValue, useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import styled from "styled-components";
import plusImg from "../../asset/plus.png";
import dummy from "../../db/data.json";
import { getCoverLetter } from "../../lib/api/service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, getQuestion } from "../../modules/service";

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

const QuestionList = ({ setFormId, setQList }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestion())
    }, [])
    const { questions } = useSelector(({ service }) => ({
        questions: service.questions
    }));

    const [qlist, plusQlist] = useState(questions?.data);
    const onPlusQuestion = () => {
        plusQlist([...qlist, { id: "", question: "", answer: "" }]);
        setQList(qlist);
    }

    // const getQlist = async () => {
    //     const json = await (await getCoverLetter());
    //     setQList(json.data.data)
    // };

    // useEffect(() => {
    //     getQlist();
    // }, [])

    // useEffect(() => {
    //     onHandleQlist(qlist)
    //     console.log(qlist)
    // }, [qlist, onHandleQlist])

    return (
        <>
            <ListBox>
                <div className="question-list-title">
                    Question List
                </div>
                {qlist ? qlist.map((item, index) => (
                    <QuestionItem
                        key={item.index}
                        title={item.question}
                        onClick={() => { setFormId(index) }}
                    />
                )) :
                    <></>
                }
                <br />
                <button className="plus-button" onClick={onPlusQuestion}>
                    <img src={plusImg} alt="질문추가버튼" />
                </button>
            </ListBox >
        </>
    )
}

export default QuestionList;