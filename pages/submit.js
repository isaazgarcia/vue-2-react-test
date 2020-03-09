import React from "react";
import styled from "@emotion/styled";
import Layout from '../components/Layout';
const Description = styled.p`margin-top: 10px;`;

export default function Index() {
    return (
        <Layout>
            <Description>
                Submit a link to your React app to <a href="mailto:careers@bukwild.com">careers@bukwild.com</a>.
                The link should be to a Codesanbox/Codepen/etc or to a public git repository. Thank you for taking the time to apply!
            </Description>
        </Layout>
    );
}
