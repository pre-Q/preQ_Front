import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import styled from "styled-components";
import plusImg from "../../asset/plus.png";
import dummy from "../../db/data.json";
import { getCoverLetter, getPreQItem } from "../../lib/api/service";
import { getCookie } from "../../lib/cookie";

const ListBox = styled.div`
    display: flex;
    width: 200px;
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

const QuestionList = ({ onHandleForm, onHandleQlist, onHandleAnswer }) => {

    const [qlist, setQList] = useState([]);
    const onPlusQuestion = () => {
        setQList([...qlist, { id: '', question: "", answer: "" }]);
    }

    const [formId, setFormId] = useState('')


    // 질문 리스트 전체 조회
    const getQlist = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        const json = await getCoverLetter(config);
        setQList(json.data.data)
    };

    useEffect(() => {
        getQlist();
    }, [])

    useEffect(() => {
        onHandleQlist(qlist)
        console.log(qlist)
    }, [qlist, onHandleQlist])


    // 질문 상세 조회
    const getQuestionDetail = async (cletterId) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await getPreQItem(cletterId, config)
            .then((res) => {
                console.log(res);
                onHandleAnswer(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        console.log(formId);
        if (formId !== '') {
            getQuestionDetail(formId);
        }
    }, [formId])


    return (
        <>
            <ListBox>
                <div className="question-list-title">
                    Question List
                </div>
                {qlist?.map((item, index) => (
                    <div onClick={() => { console.log(item.id); onHandleForm(item.id); setFormId(item.id); }} key={item.id}>
                        <QuestionItem
                            key={item.id}
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