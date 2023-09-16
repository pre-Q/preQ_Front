import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/common/NavBar";
import TopContainer from "../components/common/TopContainer";
import QuestionList from "../components/service/QuestionList";
import InputBox from "../components/common/InputBox";
import exImg from "../asset/example.png";
import StyleButton from "../components/common/StyleButton";
import Footer from "../components/common/Footer";
import QuestionItem from "../components/service/QuestionItem";
import ApplicationItem from "../components/service/ApplicationItem";
import { useNavigate, useParams } from "react-router-dom";
import Chart from "../components/service/Chart";
import KeywordBox from "../components/service/KeywordBox";
import ApplicationList from "../components/service/ApplicationList";
import { getAllApplicationDetail, getApplicationDetail, patchMemo, patchTitle } from "../lib/api/service";
import { getCookie } from "../lib/cookie";

const ServiceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    min-height: 1000px;
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
    .keyword-list{
        display: flex;
        flex-direction: row;
        gap: 20px;
        flew-wrap: wrap;
    }
    .application-item-list{
        display: flex;
        flex-direction: column;
        gap: 20px;
        flew-wrap: wrap;
    }
`

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

const InputTitle = styled.textarea`
    box-sizing: border-box;
    width: ${props => props.width};
    height: ${props => props.height};
    &:focus{
        background: #F9F8F8;
        box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
    }
    &:hover{
        background: #F9F8F8;
        box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
    }
    ::placeholder{
        color: #A7A7A7;
    }
    border: none;
    word-break:break-all;
    resize: none;
    padding: 12px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 25px;
    color: #000000;
    white-space: nowrap;
`



const ApplicationPage = () => {

    const [click, setClick] = useState('');
    const [appList, setAppList] = useState([]);
    const [appId, setAppId] = useState(0);

    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const navigator = useNavigate();

    console.log('appList', appList);
    console.log('appId', appId);

    const getAppDetail = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await getApplicationDetail(appId, config)
            .then((res) => { console.log(res); setDetail(res.data.data); setTitle(res.data.data.title); setDescription(res.data.data.memo); })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getAppDetail();
    }, [appId]);

    const onHandleLoading = (x) => {
        setLoading(x);
        console.log(loading);
    };

    const onHandleAppList = (x) => {
        setAppList(x)
    };


    const onHandleForm = (x) => {
        setAppId(x);
    };

    const [answer, setAnswer] = useState('');

    const onHandleAnswer = (x) => {
        setAnswer(x);
        console.log(answer);
    }



    // 제목 수정
    const handleTitle = () => {
        console.log('지원서 아이디', appId);
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        console.log('포커스 해제시');
        console.log(title);
        patchTitle(appId, title, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    // 설명 수정
    const handleMemo = () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        console.log('포커스 해제시');
        console.log(description);
        patchMemo(appId, description, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    // 엔터키 누르면 제목 및 내용 수정
    const activeEnter = (e) => {
        console.log('지원서 아이디', appId);
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        if (e.key === "Enter") {
            console.log('엔터키 누름');
            if (e.target.id === 'title') {
                patchTitle(appId, title, config)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                document.getElementById("title").blur();
            }
            if (e.target.id === 'memo') {
                patchMemo(appId, description, config)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                document.getElementById("memo").blur();
            }
        }
    }

    useEffect(() => {
        setAppId(appId);
    }, [appId, title, description, appList]);


    return (
        <TopContainer color="blue" image="white">
            <NavBar />
            <ServiceContainer>
                <ApplicationList onHandleForm={onHandleForm} onHandleAppList={onHandleAppList} />
                <InputWrapper>
                    <InputTitle id="title" width='600px' height='50px' placeholder="지원서 제목을 입력해주세요" onChange={(e) => setTitle(e.target.value)} onBlur={handleTitle} onKeyDown={(e) => activeEnter(e)} value={title}></InputTitle>
                    <br />
                    <InputTitle id="memo" width='600px' height='50px' placeholder="지원서 설명을 입력해주세요" onChange={(e) => setDescription(e.target.value)} onBlur={handleMemo} onKeyDown={(e) => activeEnter(e)} value={description}></InputTitle>
                    <br /><br />
                    {detail?.applicationChild ?
                        <div className="application-item-list">
                            {detail?.applicationChild?.map((item, i) =>
                                (<ApplicationItem id={item.applicationChildId} width="600px" title={item.question} content={item.answer} />)
                            )}
                        </div> : null}
                    <div className="submit-button">
                        <StyleButton width="195px" height="53px" size="22px" onClick={() => { navigator(`/application/${appId}`) }}>문항 추가하기</StyleButton>
                    </div>
                </InputWrapper>
                {detail?.keywordTop5 ?
                    <div className="result-box">
                        <Chart type='application' answer={detail?.softSkills} />
                        <div className="answer-text">
                            지원자님의 핵심 키워드는 다음과 같아요!
                        </div>
                        <div className="keyword-list">
                            {detail?.keywordTop5?.map((item) =>
                                (<KeywordBox value={item} />)
                            )}
                        </div>
                    </div>
                    : <div className="pre-box">

                        <img src={exImg} alt="준비이미지" width="450px" />
                        <div className="pre-text">
                            지원서 문항과 답변을 넣고 <br />
                            예상 면접 질문을 생성해보세요!
                        </div>
                    </div>}
            </ServiceContainer>
            <Footer />
        </TopContainer>
    );
}

export default ApplicationPage;
