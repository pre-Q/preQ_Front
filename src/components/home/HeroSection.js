import React from "react";
import styled from "styled-components";
import mainImg from "../../asset/mainImg.svg";
import { useNavigate } from "react-router";

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top : 30px;
    margin-right: auto;
    margin-left: auto;
    .mainblock{
        display: flex;
        width: 1200px;
        align-items: center;
    }
    .textblock{
        display: flex;
        flex-direction: column;
        width: 550px;
    }
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 70px;
        color: #252525;
        min-width: 634px;
    }
    .description{
        margin-top: 30px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 36px;
    }
    .start-button{
        margin-top: 80px;
        width: 300px;
        height: 76px;
        left: 122px;
        top: 679px;
        background: #0D2D84;
        border-radius: 10px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
    }
    img{
        width: 750px;
    }
`


const HeroSection = () => {

    const navigator = useNavigate();


    return (
        <HeroContainer>
            <div className="mainblock">
                <div className="textblock">
                    <div className="title">프리큐와 함께<br />면접 준비 시작하세요!</div>
                    <div className="description">
                        프리큐는 지원서를 기반으로 한 예상 면접 질문, <br /> 면접 후기와 팁을 제공하여 지원자들이 충분히 면접에 <br />대비할 수 있도록 도움을 제공하는 서비스입니다.
                    </div>
                    <button className="start-button" onClick={() => navigator('/application/id')}>프리큐 지금 체험해보기</button>
                </div>
                <img src={mainImg} alt="사진을 불러올 수 없음" />
            </div>
        </HeroContainer>
    );
};

export default HeroSection;