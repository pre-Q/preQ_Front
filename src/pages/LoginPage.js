import React from "react";
import NavBar from "../components/common/NavBar";
import LoginButton from "../components/common/LoginButton";
import GoogleIcon from '../asset/google-icon.png';
import KaKaoIcon from '../asset/kakao-icon.png';
import Footer from "../components/common/Footer";
import "../style/loginpage.css"
import TopContainer from "../components/common/TopContainer";
import { useGoogleLogin } from "@react-oauth/google";
import { login } from "../modules/auth";
import { setCookie } from "../lib/cookie";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestion } from "../modules/service";

const { Kakao } = window;

const LoginPage = ({ history }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth, authError } = useSelector(({ auth }) => ({
        auth: auth.auth,
        authError: auth.authError
    }));

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse)
            const getToken = async () => {
                const payload = {
                    code: codeResponse.code,
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
                    redirect_uri: "http://localhost:3000",
                    grant_type: "authorization_code",
                };
                axios.post("https://oauth2.googleapis.com/token", payload)
                    .then((res) => {
                        let type = 'google';
                        let accessToken = res.data.access_token;
                        console.log(type, accessToken);
                        dispatch(login({ type, accessToken }))
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            return getToken();
        },
        flow: 'auth-code',
    })

    const handleKakaoLogin = () => {
        console.log('클릭')
        Kakao.Auth.login({
            success: auth => {
                let type = 'kakao';
                let accessToken = auth.access_token;
                console.log(accessToken);
                dispatch(login({ type, accessToken }))
            },
            fail: error => {
                alert(JSON.stringify(error))
            }
        })
    }

    useEffect(() => {
        if (authError) {
            console.log('오류');
            console.log(authError);
        }
        if (auth) {
            console.log('성공');
            console.log(auth)
            setCookie('is_login', `${auth.data.accessToken}`)
            dispatch(getQuestion())
            navigate('/');
        }
    }, [auth, authError, navigate])


    return (
        <>
            <TopContainer color="white" image="blue">
                <NavBar />
                <div className="login-container">
                    <div className="login-text">
                        Sign In
                    </div>
                    <div className="login-btns">
                        <div onClick={handleGoogleLogin}>
                            <LoginButton
                                src={GoogleIcon}
                                text="Google 계정으로 시작"
                                btncolor="#FFFFFF"
                            />
                        </div>
                        <div onClick={handleKakaoLogin}>
                            <LoginButton
                                src={KaKaoIcon}
                                text="카카오 계정으로 시작"
                                btncolor="#FFE617"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="login-subtext">
                        ✽ 계정이 없으면 회원가입이 진행됩니다
                    </div>
                </div>
                <Footer />
            </TopContainer >
        </>
    )
}

export default LoginPage;