import React from 'react';
import Task from './Task.jsx';

let Category = (props) => (
    <div style={{width: "200", border: '1px solid black', textAlign: 'center', padding: '5', margin: '10'}}>
        <div>
            <span style={{float: 'left'}}>
                <button onClick={() => {props.moveCategoryLeft(props.name)}}>{'<-'}</button>
            </span>
                <span>&nbsp;{props.name}&nbsp;</span>
            <span style={{float: 'right'}}>
            <button onClick={() => {props.moveCategoryRight(props.name)}}>{'->'}</button>
            </span>
        </div>
        <div><Task /></div>
        <div>
            <button>Add Task</button>
        </div>
    </div>
)

export default Category;