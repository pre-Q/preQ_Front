import React from "react";
import styled from "styled-components";

const ItemBox = styled.div`
    box-sizing: border-box;
    width: ${props => props.width};
    background: #F9F8F8;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border: none;
    word-break:break-all;
    resize: none;
    padding: 12px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    .title-text{
        font-family: 'Poppins';
        font-style: bold;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
    }
`
const ApplicationItem = (props) => {

    const { id, title, content, width } = props;
    return (
        <ItemBox width={width} id={id}>
            <span className="title-text">{title}</span>
            <br /><br />
            {content}
        </ItemBox>
    )
}

export default ApplicationItem;