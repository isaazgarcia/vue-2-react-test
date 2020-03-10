import React, {useState,useReducer} from "react";
import Layout from '../components/Layout';
import {fetcher, tint} from "../utils";
import styled from "@emotion/styled";
import Link from "next/link";
import {Transition} from 'react-transition-group';
import { NextSeo } from 'next-seo';
import Rorphans from "../components/Rorphans";

const Index = props => {
    const [checklist, dispatch] = useReducer(checklistReducer, props.checklist);
    const complete = checklist.filter(task => task.complete).length;
    const finished = complete === checklist.length;
    const StatusMessage = !finished? <>Complete {complete} / {checklist.length}</> : <>That's it! <Link href={"/submit"}><a>Here's how to submit your work.</a></Link></>;

    return (
        <Layout>
            <NextSeo title="Home" description="Vue 2 React Home page."/>
            <Paragraph><strong>Your objective</strong>: Convert this Codesandbox to React.</Paragraph>
            <Paragraph><Rorphans>The purpose of this test is to validate experience with some of the tasks you'll be encountering in your first month with Bukwild. Such as:</Rorphans></Paragraph>

                <Tasks>
                    {checklist.map((task) => <Task key={task.id} complete={task.complete} onClick={() => dispatch({type: 'toggleTask', payload: task.id})}>
                        <Rorphans>{task.message}</Rorphans>
                    </Task>)}
                </Tasks>

            <Fade in={!finished} message={StatusMessage} Status={StatusStyle} />
        </Layout>
    );
};

Index.getInitialProps = async () => {
    const checklist = await fetcher('/api/checklist');

    return {
        checklist: checklist.map((x, i) => {
            return {id: i, message: x, complete: false}
        })
    };
};

//Styles
const green = `#009c4b`;
const Tasks = styled.ul`
    margin-top: 20px;
`;

const StatusStyle = styled.div`
    font-weight: 700;
    margin-top: 20px;
`;
const Task = styled.li`
    margin-top: 5px;
    padding: 2px 6px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity, background, color;
    transition-duration: 0.2s;
    @media print {
  
    orphans: 3;
  
}
    ${({complete}) => complete && `
        opacity: 0.25;
        color: ${green};
    `}
    
    ${({complete}) => !complete && `
    &:hover{
        background: ${tint(green, 80)};
        opacity: 1;
    }
    `}
`;
const Paragraph = styled.p`margin-top: 10px;`;
const transitionDuration = 400;
const defaultStyle ={
    transition: `opacity ${transitionDuration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 1},
};

//Components
const Fade = ({ in: inProp, Status ,message }) => (
    <Transition in={inProp} timeout={transitionDuration}>
        {state => (
            <Status style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                {(state==="entered" || state==="exited") ? message:<>&nbsp;</>}
                {/*{message}*/}
                {/*{state}*/}
            </Status>
        )}
    </Transition>
);

//Reducer
const checklistReducer = (state, action) => {
    if (action.type === 'toggleTask') {
        return state.map(task => {
            if (task.id === Number(action.payload)) {task.complete = !task.complete}
            return task;
        });
    } else {
        return state;
    }
};

export default Index;
