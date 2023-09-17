import React, { useState } from "react";
import styled from "styled-components";
import AnswerItem from "./AnswerItem";
import TailModal from "../common/TailModal";
import InputBox from "../common/InputBox";
import StyleButton from "../common/StyleButton";

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .answer-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #000000;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

const AnswerList = (props) => {

    const [question, setQuestion] = useState('');
    const [result, setResult] = useState('');

    // 답변 저장
    const [text, setText] = useState('');
    const saveText = (x) => {
        setText(x);
    }

    // 모달 관련
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <ListBox>
                <div className="answer-text">
                    지원자님의 답변에 대한 예상 면접 질문입니다.
                </div>
                {props?.answer.map((item) =>
                    <>
                        {
                            item.question ? <AnswerItem text={item.question} onClick={openModal} handleText={saveText} /> : <AnswerItem text={item} />
                        }

                    </>

                )}
                {/* {props?.answer.map((item, index) =>
                <div className="keyword">{index + 1}. {item}</div>
            )} */}
            </ListBox>
            <TailModal open={modalOpen} close={closeModal} header="Modal heading">
                <ContentBox>
                    <div className="title">
                        {text}
                    </div>
                    <br />
                    <div className="input-wrapper">
                        <div className="answer-box">
                            <InputTitle>예상 면접 질문</InputTitle>
                            <InputBox width="380px" height="400px" value={result} />
                        </div>
                        <div className="answer-box">
                            <InputTitle>질문에 대한 답변</InputTitle>
                            <InputBox width="380px" height="400px" />
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <StyleButton width="180px" size="20px" value={question} onChange={(e) => setQuestion(e.target.value)}>답변 완료</StyleButton>
                    </div>
                </ContentBox>
            </TailModal>
        </>

    )
}

export default AnswerList;

const ContentBox = styled.div`
    width: 800px;
    border-box: box-sizing;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .input-wrapper{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: space-between;
    }
    .answer-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .button-wrapper{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

`

const InputTitle = styled.div`
    display: flex;
    flex-direction: flex-start;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 48px; 
    color: #000000;
    max-width: 1000px;
`