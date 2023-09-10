import React from "react";
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
import { useNavigate } from "react-router-dom";
import Chart from "../components/service/Chart";
import KeywordBox from "../components/service/KeywordBox";

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
`



const ApplicationPage = () => {

    const [click, setClick] = useState('');
    const [formId, setFormId] = useState('');
    const [qlist, setQList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const navigator = useNavigate();


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
        console.log(answer);
    }

    const handleTitle = () => {
        console.log('포커스 해제시')
        console.log(title, description);
    }
    
    const activeButton = () => {
        alert(`${title} ${description} 입력 완료`);
    }
    const activeEnter = (e) => {
        if(e.key === "Enter"){
            console.log('엔터키 누름');
            activeButton();
        }
    }

    return (
        <TopContainer color="blue" image="white">
            <NavBar />
            <ServiceContainer>
                <QuestionList onHandleForm={onHandleForm} onHandleQlist={onHandleQlist} onHandleAnswer={onHandleAnswer} />
                <InputWrapper>
                    <InputTitle width='600px' height='50px' placeholder="지원서 제목을 입력해주세요" onChange={(e) => setTitle(e.target.value)} onBlur={handleTitle} onKeyDown={(e) => activeEnter(e)}></InputTitle>
                    <br/>
                    <InputTitle width='600px' height='50px' placeholder="지원서 설명을 입력해주세요" onChange={(e) => setDescription(e.target.value)} onBlur={handleTitle} onKeyDown={(e) => activeEnter(e)}></InputTitle>
                    <br/><br/>
                    <div className="application-item-list">
                        {Array(3)
                            .fill(0)
                            .map((_, i) =>
                                (<ApplicationItem width="600px" title='자기소개 해주세요.' content='저는 oo직무 수행에 도움이 될 만한 oo 인턴 경험과 ooo 일 경험을 가지고 있습니다. 이러한 직무경험과 함께 oo 경험하는 중 팀원들 사이에서 분위기메이커 역할을 하여 함께 일을 하는데 시너지를 낼 수 있는 역할을 하였습니다. 저와 함께 일을 하게 되면 저의 긍정마인드와 함께 밝은 모습으로 일 할 수 있게 될 것입니다.' />)
                            )}
                    </div>
                    <div className="submit-button">
                        <StyleButton width="195px" height="53px" size="22px" onClick={() => { navigator('/service/question') }}>문항 추가하기</StyleButton>
                    </div>
                </InputWrapper>
                <div className="result-box">
                    <Chart type='application' />
                    <div className="answer-text">
                        지원자님의 핵심 키워드는 다음과 같아요!
                    </div>
                    <div className="keyword-list">
                        {Array(5)
                            .fill(0)
                            .map((_, i) =>
                                (<KeywordBox value='열정' />)
                            )}
                    </div>
                </div>
                {/* <div className="pre-box">

                    <img src={exImg} alt="준비이미지" width="450px" />
                    <div className="pre-text">
                        지원서 문항과 답변을 넣고 <br />
                        예상 면접 질문을 생성해보세요!
                    </div>
                </div> */}



            </ServiceContainer>
            <Footer />
        </TopContainer>
    );
}

export default ApplicationPage;
