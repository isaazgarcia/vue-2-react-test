import React, {useState} from "react";
import Layout from '../components/Layout';
import {fetcher, tint} from "../utils";
import styled from "@emotion/styled";
import Link from "next/link";
import {Transition,TransitionGroup} from 'react-transition-group';

const green = "#009c4b";
const Tasks = styled.ul`
    margin-top: 20px;
`;
const Status = styled.div`
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

const P = styled.p`margin-top: 10px;`;

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1,},
    exiting: {opacity: 0},
    exited: {opacity: 0},
};

const Index = props => {
    const [checklist, setChecklist] = useState(props.checklist);
    const completeTask = (id) => {
        const newChecklist = checklist.map(task => {
            if (task.id === Number(id)) {
                task.complete = !task.complete
            }
            return task;
        });
        setChecklist(newChecklist);
    };
    const complete = checklist.filter(task => task.complete).length;
    const finished = complete === checklist.length;
    return (
        <Layout>
            <P><strong>Your objective</strong>: Convert this Codesandbox to React.</P>
            <P>The purpose of this test is to validate experience with some of the tasks you'll be encountering in your first month with Bukwild. Such as:</P>
            <Tasks>
                {checklist.map((task) => <Task key={task.id} complete={task.complete} onClick={() => completeTask(task.id)}>{task.message}</Task>)}
            </Tasks>
            {finished?
                <Status>Complete ${complete} / ${checklist.length}</Status>
                :
                <Status>That's it! <Link href="/submit">Here's how to submit your work. </Link></Status>
            }

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

export default Index;
