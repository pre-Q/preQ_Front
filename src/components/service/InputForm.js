import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputBox from "../common/InputBox";
import StyleButton from "../common/StyleButton";
import { getPreQ, getPreQItem, saveCoverLetter } from "../../lib/api/service";
import { getCookie } from "../../lib/cookie";
import { addPostItem } from "../../lib/api/community";
import { useParams } from "react-router-dom";


const InputWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    .submit-button{
        display:flex;
        width: 600px;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 5px;
    }
`

const InputTitle = styled.div`
    display: flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 48px; 
    color: #000000;
`
const PROXY = window.location.hostname === 'localhost' ? '' : '/home';

const InputForm = ({ isClick, formId, qlist, onHandleAnswer, onHandleLoading }) => {

    const { id } = useParams(); 

    const [appId, setAppId] = useState('');

    const [click, setClick] = useState(false);
    const [data, setData] = useState(qlist[formId]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [preqList, setpreqList] = useState('');
    const [keywords, setKeywords] = useState('');
    const [abilities, setAbilities] = useState('');

    console.log(title, content);
    console.log('input data', data);


    // 질문 저장
    const onSaveForm = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }

        await saveCoverLetter(id, title, content, config)
            .then((res) => {
                console.log(res)
                window.location.replace(`/application/${id}`);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    // 질문 답변 조회 (핵심 역량, 키워드, 예상 면접 질문 리스트)
    const onGeneratePreQ = async () => {
        onHandleLoading(true);
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await saveCoverLetter(id, title, content, config)
        .then((res) => 
            getPreQ(formId, config)
            .then((res) => {
                console.log(res);
                console.log(res.data.data);
                onHandleAnswer(res.data.data);
                // setpreqList(res.data.data.preqList);
                // setKeywords(res.data.data.keywordTop5);
                // setAbilities(res.data.data.softSkills);
                isClick(true);
            })
            .catch((err) => {
                console.log(err);
                onHandleLoading(false);
            }))
        onHandleLoading(false);
    }

    const HandleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const HandleContentChange = (e) => {
        setContent(e.target.value);
    }

    // 질문 클릭시 상세 조회(질문,답변,예상질문결과까지)
    const getQuestionDetail = async (formId) => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await getPreQItem(id, formId, config)
            .then((res) => {
                console.log(res);
                setTitle(res.data.data?.question);
                setContent(res.data.data?.answer);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        console.log('input fromId', formId);
        console.log('qlist', qlist);
        if (formId !== '') {
            getQuestionDetail(formId);
        }
        else {
            setTitle('');
            setContent('');
        }
    }, [formId])


    // useEffect(() => {
    //     setData(qlist[formId])
    //     setTitle(qlist[formId]?.question)
    //     setContent(qlist[formId]?.answer)
    // }, [formId, data, click, setTitle, setContent, qlist]);


    return (
        <>
            <InputWrapper>
                <InputTitle>Enter Question</InputTitle>
                <InputBox onChange={HandleTitleChange} width="600px" height='50px' value={title} />
                <br /><br />
                <InputTitle>Enter Answer</InputTitle>
                <InputBox onChange={HandleContentChange} width="600px" height="640px" value={content} />
                <br />
                <div className="submit-button">
                    {/* {click && title ? <StyleButton width="195px" height="53px" size="22px" onClick={onSaveForm}>Save</StyleButton> : <></>} */}
                    <StyleButton width="195px" height="53px" size="22px" onClick={onSaveForm}>Save</StyleButton>
                    <StyleButton width="195px" height="53px" size="22px" onClick={() => { onGeneratePreQ(); setClick(true); }}>Generate</StyleButton>
                </div>
            </InputWrapper>
        </>
    )
}

export default InputForm;