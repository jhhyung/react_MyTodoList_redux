import React from "react";

// styled-components를 import
import styled from "styled-components";

// Layout 안의 자식 컴포넌트들을 받을 때 {props.children} 사용
function Layout({ children }) {
    return (
        <StBackground>
            <StLayout>
                {children}
            </StLayout>
        </StBackground>

    )
}
export default Layout;
const StBackground = styled.div`
    background-color: #000000f6;
`
const StLayout = styled.div`
    /* 레이아웃의 최대, 최소 너비 지정 */
    max-width: 1200px;
    min-width: 800px;
    
    /* todoBox가 일정 크기를 넘어가면 이미지가 잘리는 현상때문에 추가 */
    min-height: 100vh;

    /* 레이아웃 가운데 정렬 */
    margin: 0 auto;

    /* 배경 이미지 설정 */
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/1105389/pexels-photo-1105389.jpeg?auto=compress&cs=tinysrgb&w=1600");
    background-position: center;
    background-size: cover;
` 