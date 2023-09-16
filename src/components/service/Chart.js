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
    // justify-content: center;
    .plot-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #000000;
    }
    // .plot-box{
    //     display: flex;
    //     flex-direction: row;
    // }
`

const Chart = (props) => {

    return (
        <ChartBox>
            {props?.type === 'application' ?
                <div className="answer-text">
                    지원자님은 긍정적인 마인드가 돋보여요!
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