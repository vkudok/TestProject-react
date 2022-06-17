import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
    color: black;
    text-align: center;
`

const Title = ({children}) => {
    return <StyledTitle>
        {children}
    </StyledTitle>
};

export default Title;