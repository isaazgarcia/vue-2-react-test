import styled from "@emotion/styled";
import { Global, css } from '@emotion/core'
import React from "react";
import {GlobalCss} from "../assets/styles";

const BasicLayout =styled.div`
  min-height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
  margin: 0 auto;
  padding: 20px;
`;
const Logo = styled.img`
  width: 128px;
`;
const Title = styled.h1`
  margin-top: 30px;
`;

const Layout =({ children })=>{
    return (
        <BasicLayout>
            <a href="//www.bukwild.com">
                <Logo src='https://www.bukwild.com/logo.png' alt='Bukwild' />
            </a>
            <Title>Vue → React </Title>
            {children}
        </BasicLayout>
    );
};

export default Layout;
