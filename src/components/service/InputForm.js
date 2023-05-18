import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputBox from "../common/InputBox";
import StyleButton from "../common/StyleButton";
import { getPreQ, saveCoverLetter } from "../../lib/api/service";


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

const InputForm = ({ isClick, formId, qlist, onHandleAnswer }) => {

    const [click, setClick] = useState(false)
    const [data, setData] = useState(qlist[formId])
    const [title, setTitle] = useState(qlist[formId]?.question)
    const [content, setContent] = useState(qlist[formId]?.answer)

    console.log(title, content)
    const onClick = () => {
        saveCoverLetter({ question: title, answer: content })
            .then((res) => {
                console.log(res)

                getPreQ({ cletterId: res.data.data.id })
                    .then((res) => {
                        console.log(res);
                        onHandleAnswer(res.data.data);
                        isClick(true);
                    })
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const HandleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const HandleContentChange = (e) => {
        setContent(e.target.value);
    }


    useEffect(() => {
        setData(qlist[formId])
        setTitle(qlist[formId]?.question)
        setContent(qlist[formId]?.answer)
    }, [formId, data, click, setTitle, setContent, qlist])



    return (
        <>
            <InputWrapper>
                <InputTitle>Enter Question</InputTitle>
                <InputBox onChange={HandleTitleChange} width="600px" height='50px' value={formId !== "" ? title : ""} />
                <br /><br />
                <InputTitle>Enter Answer</InputTitle>
                <InputBox onChange={HandleContentChange} width="600px" height="640px" value={formId !== "" ? content : ""} />
                <br />
                <div className="submit-button">
                    <StyleButton width="195px" height="53px" size="22px" onClick={onClick}>Generate</StyleButton>
                </div>
            </InputWrapper>
        </>
    )
}

export default InputForm;