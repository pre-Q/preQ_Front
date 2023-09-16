import React from "react";
import styled from "styled-components";

const KeywordList = (props) => {

    console.log(props?.answer);

    return (
        <KeywordBox>
            <div className="title">키워드</div>
            <div className="keyword-list">
                {props?.answer?.map((item, index) =>
                    <div className="keyword">{index + 1}. {item}</div>
                )}
            </div>
        </KeywordBox>
    )
}

export default KeywordList;

const KeywordBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .keyword{
        font-size: 20px;
    }
    .keyword-list{
        display: flex;
        flex-direction: column;
        height: 300px;
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 45px;
        color: #000000;
    }
`