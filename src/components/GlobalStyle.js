import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    margin: auto;
    max-width: 75%;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.flexDirection};
`

const GlobalContainer = (props) =>{
    return <StyledContainer {...props}/>
};

export default GlobalContainer;