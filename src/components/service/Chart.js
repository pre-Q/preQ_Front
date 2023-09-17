import React from "react";
import styled from "styled-components";
// import barChart from "../../asset/Section.png";
// import pieChart from "../../asset/graph2.png";
import Barchart from "./BarChart";
import RadarChart from "./RadarChart";

const ChartBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .plot-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #000000;
    }
    .skill-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 45px;
        color: #0D2D84;
    }
`

const Chart = (props) => {

    const skills = ['열정', '협업능력', '도전정신', '문제해결', '리더십', 'IT역량'];
    const answerSkills = props?.answer?.map((item) => Number(item));

    const maxValue = Math.max(...answerSkills);
    const maxIndex = answerSkills?.findIndex((item) => item === maxValue);
    const maxSkillName = skills[maxIndex];

    return (
        <ChartBox>
            {props?.type === 'application' ?
                <div className="answer-text">
                    지원자님은 <span className="skill-text">{maxSkillName}</span>이 돋보여요!
                </div> :
                <div className="plot-text">
                    세부 역량
                </div>
            }
            <div className="plot-box">
                {/* <Barchart /> */}
                <RadarChart answer={props?.answer} />
            </div>
        </ChartBox>
    )
}

export default Chart;