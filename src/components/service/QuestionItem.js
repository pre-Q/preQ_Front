import React, { useState } from "react";
import styled from "styled-components";
import StyleButton from "../common/StyleButton";
import { useParams, useSearchParams } from "react-router-dom";
import { deleteApplication, deleteApplicationChild } from "../../lib/api/service";
import { getCookie } from "../../lib/cookie";

const ItemBox = styled.button`
    box-sizing: border-box;
    border: none;
    width: 200px;
    height: 50px;
    background: #F9F8F8;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    padding: 10px;
    margin-bottom: 18px;
    color: rgba(0, 0, 0, 0.7);
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: start;
`

const QuestionItem = (props) => {

    const { key, type, title, childId, childHoverId, appId, appHoverId } = props;

    const { id, cid } = useParams();
    // if (title !== null) {
    //     var titleStr = title ? title.substr(0, 13) + "..." : '제목 없음'
    // }

    console.log(childHoverId, childId);

    let config = {
        headers: {
            'Authorization': `Bearer ${getCookie('is_login')}`,
            'withCredentials': true,
        }
    }

    const handleDeleteApp = async () => {
        await deleteApplication(appId, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        window.location.replace(`/application/${id}`);
    }

    const handleDeleteChild = async () => {
        await deleteApplicationChild(id, childId, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        window.location.replace(`/application/${id}/child/${cid}`);
    }

    return (
        <>
            {type === 'app' ? (appHoverId === appId ? <button onClick={(e) => { e.stopPropagation(); handleDeleteApp(); }}>삭제</button> : null) :
                (childHoverId === childId ? <button onClick={handleDeleteChild}>삭제</button> : null)}
            <ItemBox>
                {title}
            </ItemBox>
        </>
    )
}

export default QuestionItem;