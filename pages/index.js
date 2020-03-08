import React from "react";
import fetch from 'isomorphic-unfetch';
import {fetcher} from "../utils";

const Index = ({ checklist }) => {
    return (
        <div>
            <h1>Hello Next</h1>
            {checklist.map(item=> <p>{item}</p>)}
        </div>
    );
};
Index.getInitialProps = async () => {
    const checklist = await fetcher('/api/checklist');
    return { checklist };
};

export default Index;
