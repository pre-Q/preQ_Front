import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.png"
import githubImg from "../../asset/github-mark.png"

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin-top : 70px;
    margin-right: auto;
    margin-left: auto;
    .footer-wrapper{
        display: flex;
        width: 1200px;
        justify-content: space-between;
    }
    .company-info{
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: left;
        // width: 400px;
    }
    .company-logo{
        width: 160px;
    }
    .contact{
        right: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 40px;
        // width: 800px;
    }
    .contact-text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #252525;
    }
    .github-img{
        width: 30px;
    }
    .github-link{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: #252525;        
    }
`
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <div className="footer-wrapper">
                    <div className="company-info">
                        <img className="company-logo" src={logo} alt="사진을 불러올 수 없음" />
                        <div className="text">
                            Web service offering cover-letter-<br />
                            based interview Questions
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact-text">
                            Contact Us
                        </div>
                        <div className="github-link">
                            <img className="github-img" src={githubImg} alt="사진을 불러올 수 없음" />
                            <Link className="github-link" to='https://github.com/pre-Q'>
                                github.com
                            </Link>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        </>
    )
}

export default Footer;