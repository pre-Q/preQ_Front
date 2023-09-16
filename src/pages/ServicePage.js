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
import KeywordList from "../components/service/KeywordList";
import Spinner from "../asset/spinner.gif";
import { useParams } from "react-router-dom";


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
        justify-content : flex-start;
        align-items: flex-start;
        gap: 20px;
    }
    .analy-box{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
    }
`

const ServicePage = () => {

    const [click, setClick] = useState(false);

    const [loading, setLoading] = useState(false);

    const isClick = (x) => {
        setClick(x)
    }

    const [formId, setFormId] = useState('');

    const [qlist, setQList] = useState([]);

    console.log('servicepage', qlist);

    const onHandleLoading = (x) => {
        setLoading(x);
        console.log(loading);
    };

    const onHandleQlist = (x) => {
        setQList(x)
    };


    const onHandleForm = (x) => {
        setFormId(x)
    };

    const [answer, setAnswer] = useState('');


    const onHandleAnswer = (x) => {
        setAnswer(x);
        console.log('answer', answer)
    }


    useEffect(() => {
        console.log(qlist);
        console.log('service-page id',formId);
        console.log('답', answer);
        console.log(answer?.softSkills);
        console.log(answer?.keywordTop5);
    }, [formId, answer, qlist])


    return (
        <>
            <TopContainer color="blue" image="white">
                <NavBar />
                <ServiceContainer>
                    <QuestionList onHandleForm={onHandleForm} onHandleQlist={onHandleQlist} onHandleAnswer={onHandleAnswer} />
                    <InputForm isClick={isClick} formId={formId} answer={answer} qlist={qlist} onHandleAnswer={onHandleAnswer} onHandleLoading={onHandleLoading} />
                    {answer ?
                        <>
                            {loading ?
                                <div className="pre-box">
                                    <img src={Spinner} alt='로딩중' width="20%" />
                                    <div className="pre-text">
                                        잠시만 기다려주세요!
                                    </div>
                                </div>
                                :
                                <div className="result-box">
                                    <div className="analy-box">
                                        <Chart type='question' answer={answer?.softSkills} />
                                        <KeywordList answer={answer?.keywordTop5} />
                                    </div>
                                    <AnswerList answer={answer?.preqList} />
                                </div>
                            }
                        </>
                        :
                        <div className="pre-box">
                            {loading ?
                                <>
                                    <img src={Spinner} alt='로딩중' width="20%" />
                                    <div className="pre-text">
                                        잠시만 기다려주세요!
                                    </div>
                                </>
                                :
                                <>
                                    <img src={exImg} alt="준비이미지" width="450px" />
                                    <div className="pre-text">
                                        지원서 문항과 답변을 넣고 <br />
                                        예상 면접 질문을 생성해보세요!
                                    </div>
                                </>}
                        </div>
                    }
                </ServiceContainer>
                <Footer />
            </TopContainer>
        </>
    )
}

export default ServicePage;