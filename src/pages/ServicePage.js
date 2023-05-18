import React, { useEffect } from "react";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import styled from "styled-components";
import QuestionList from "../components/service/QuestionList";
import InputForm from "../components/service/InputForm";
import Footer from "../components/common/Footer"
import exImg from "../asset/example.png";
import AnswerList from "../components/service/AnswerList";
import Chart from "../components/service/Chart";
import { useState } from "react";
import { getCoverLetter, getPreQ } from "../lib/api/service";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../modules/service";


const ServiceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    gap: 40px;
    .pre-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
    }
    .pre-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        color: rgba(37, 37, 37, 0.67);
    }
    .result-box{
        display: flex;
        flex-direction: column;
        justify-content : center;
        align-items: center;
        gap: 20px;
    }
`

const ServicePage = () => {


    const { questions } = useSelector(({ service }) => ({
        questions: service.questions
    }))

    const [click, setClick] = useState(false);

    const [answer, setAnswer] = useState();

    const [qlist, setQList] = useState(questions?.data);
    console.log(qlist)

    // 질문 리스트 클릭시 전달
    const [formId, setFormId] = useState(0);
    console.log(formId)

    const isClick = (x) => {
        setClick(x)
    }


    return (
        <>
            <TopContainer color="blue" image="white">
                <NavBar />
                <ServiceContainer>
                    <QuestionList setFormId={setFormId} setQList={setQList} />
                    <InputForm formId={formId} qlist={qlist} setAnswer={setAnswer} />
                    {/* <QuestionList onHandleForm={onHandleForm} onHandleQlist={onHandleQlist} /> */}
                    {/* <InputForm isClick={isClick} formId={formId} qlist={qlist} onHandleAnswer={onHandleAnswer} /> */}
                    {answer ?
                        <div className="result-box">
                            <Chart />
                            <AnswerList answer={answer} />
                        </div> :
                        <div className="pre-box">
                            <img src={exImg} alt="준비이미지" width="450px" />
                            <div className="pre-text">
                                지원서 문항과 답변을 넣고 <br />
                                예상 면접 질문을 생성해보세요!
                            </div>
                        </div>
                    }
                </ServiceContainer>
                <Footer />
            </TopContainer>
        </>
    )
}

export default ServicePage;