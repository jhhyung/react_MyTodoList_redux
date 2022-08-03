import React from "react";

// styled-components를 사용하기 위해 import
import styled from "styled-components";

function Header() {
    return (
        <StHeader>
            <div>My Todo List</div>
            <div>React</div>
        </StHeader>
    )
};
export default Header;

const StHeader = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 25px;
`