import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { deleteApplication, deleteApplicationChild } from "../../lib/api/service";
import { getCookie } from "../../lib/cookie";
import deleteImg from "../../asset/delete-btn.png";


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
            {type === 'app' ? (appHoverId === appId && appId !== 'new' ? <button onClick={(e) => { e.stopPropagation(); handleDeleteApp(); }} style={{ border: "none", backgroundColor: "transparent", width: "100%", textAlign: "right" }}><img src={deleteImg} alt="삭제아이콘" width="25px" /></button> : null) :
                (childHoverId === childId && childId !== 'new' ? <button onClick={handleDeleteChild} style={{ border: "none", backgroundColor: "transparent", width: "100%", textAlign: "right" }}><img src={deleteImg} alt="삭제아이콘" width="25px" /></button> : null)}
            <ItemBox>
                {title}
            </ItemBox>
        </>
    )
}

export default QuestionItem;