import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputBox from "../common/InputBox";
import StyleButton from "../common/StyleButton";
import { getPreQ, saveCoverLetter } from "../../lib/api/service";
import { useSelector } from "react-redux";


const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    .submit-button{
        display:flex;
        width: 600px;
        justify-content: flex-end;
        align-items: flex-end;
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

const InputForm = ({ isClick, formId, qlist, setAnswer }) => {

    const [click, setClick] = useState(false)
    // const [data, setData] = useState(qlist[formId])
    const [question, setQuestion] = useState(qlist[formId]?.question);
    const [content, setContent] = useState(qlist[formId]?.answer);

    console.log(qlist)
    console.log(question, content)

    const onClick = () => {
        saveCoverLetter({ question: question, answer: content })
            .then((res) => {
                console.log(res)

                getPreQ({ cletterId: res.data.data.id })
                    .then((res) => {
                        console.log(res);
                        setAnswer(res.data.data);
                        isClick(true);
                    })
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const onChangeQuestion = (e) => {
        setQuestion(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }


    useEffect(() => {
        // setData(qlist[formId])
        setQuestion(qlist[formId]?.question)
        setContent(qlist[formId]?.answer)
    }, [formId, click, setQuestion, setContent, qlist])



    return (
        <>
            <InputWrapper>
                <InputTitle>Enter Question</InputTitle>
                <InputBox onChange={onChangeQuestion} width="600px" height='50px' value={question ? question : ""} />
                <br /><br />
                <InputTitle>Enter Answer</InputTitle>
                <InputBox onChange={onChangeContent} width="600px" height="640px" value={content ? content : ""} />
                <br />
                <StyleButton width="195px" height="53px" size="22px" onClick={onClick}>Generate</StyleButton>
            </InputWrapper>
        </>
    )
}

export default InputForm;