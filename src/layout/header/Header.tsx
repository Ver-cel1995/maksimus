import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import HeaderImg from "../../images/headerImg.png"
import {Main} from "./main/Main";
import React from "react";
import {FlexWrapper} from "../../components/FlexWrapper";

type Props = {
    
};

export const Header = (props: Props) => {
    return (
        <StyledHeaders>
         <Container>
             <Main/>
         </Container>
        </StyledHeaders>
    );
};

const StyledHeaders = styled.header`
    max-width: 1920px;
    background: url(${HeaderImg}) no-repeat;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`