import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import card1 from '../../asset/card1.png'
import card2 from '../../asset/card2.png'
import card3 from '../../asset/card3.png'

const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top : 150px;
    margin-right: auto;
    margin-left: auto;
    .main-block{
        width: 1200px;   
    }
    .title{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 35px;
        color: #252525;
        justify-content: center;
        align-items: center;
    }
    .cards-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 70px;
        width: 1200px;
        height: 325px;
        background: #FFFFFF;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
    }
    .cards{
        display: flex;
        justify-content: center;
        white-space: pre-line
    }
`

const SubSection = () => {
    return (
        <>
            <SectionContainer>
                <div className='main-block'>
                    <div className='title'>
                        주요 기능
                    </div>
                    <div className='cards-container'>
                        <div className='cards'>
                            <CardItem
                                src={card1}
                                label='Question Prediction'
                                text='지원서 기반&#13;&#10;예상 면접 질문 제공'
                            />
                            <CardItem
                                src={card2}
                                label='Community'
                                text='지원자들간 면접 후기와 팁을&#13;&#10;공유하는 게시판'
                            />
                            <CardItem
                                src={card3}
                                label='Keyword Analysis'
                                text='키워드 분석을 통한&#13;&#10;지원자의 성향 파악'
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer >
        </>
    )
}

export default SubSection;