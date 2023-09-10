import styled from "styled-components";
import background from "../../asset/background.png";
import background2 from "../../asset/background2.png";

// 웹사이트 배경 이미지
const TopContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1400px;
    min-height: 1400px;
    background-image: url(${props => props.image === 'blue' ? background : background2});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain;
    background-color: ${props => props.color === 'white' ? '#FFFFFF' : '#DBE9F1'};
`

export default TopContainer;