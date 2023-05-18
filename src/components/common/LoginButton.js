import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
    display: flex;
    // justify-content: center;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
    padding: 5px 25px;
    gap: 15px;
    width: 426px;
    height: 72px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    background-color: ${(props) => props.btncolor}
    }
    .img{
        display: flex;
        justify-content: flex-start;
    }
    .btn-text{
        margin-right: 70px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #000000;
    }
`

const LoginButton = (props) => {
    return (
        <StyledButton
            btncolor={props.btncolor}
        >
            <img src={props.src} alt="아이콘이미지" width="40px;" />
            <div className="btn-text">
                {props.text}
            </div>
        </StyledButton>
    );

}

export default LoginButton;