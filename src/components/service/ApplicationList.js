import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionItem from "./QuestionItem";
import plusImg from "../../asset/plus.png";
import { getAllApplication, postNewApplication } from "../../lib/api/service";
import { getCookie } from "../../lib/cookie";

const ListBox = styled.div`
    display: flex;
    width: 200px;
    align-items: flex-center;
    flex-direction: column;
    .question-list-title{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 36px;
        color: #000000;
        margin-bottom: 10px;
    }
    .plus-button{
        border: none;
        background: none;

    }
`

const ApplicationList = ({onHandleForm}) => {

    const [appList, setAppList] = useState([]);

    console.log(appList);
    const onPlusApplication = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie('is_login')}`,
            }
        }
        await postNewApplication(config)
        .then((res) => {console.log(res); setAppList([...appList, { id: res.data, question: "", answer: "" }]);})
        .catch((err) => console.log(err));
        
        console.log(appList);
    }

    // 지원서 리스트 전체 조회
    const getAppList = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        const json = await getAllApplication(config);
        setAppList(json.data.data)
    };

    useEffect(() => {
        getAppList();
    }, []);

    return(
        <>
        <ListBox>
        <div className="question-list-title">
                    Application List
                </div>
                {appList?.map((item, index) => (
                    <div onClick={() => { console.log(item.applicationId); onHandleForm(item.applicationId)}} key={item.id}>
                        <QuestionItem
                            key={item.applicationId}
                            title={item.question}
                        />
                    </div>
                ))}
                <br />
                <button className="plus-button" onClick={onPlusApplication}>
                    <img src={plusImg} alt="질문추가버튼" />
                </button>
        </ListBox>
        </>
    )
}

export default ApplicationList;