import React from 'react';

let Task = () => (
    <div style={{border: '1px solid black', margin: '2', padding:'2'}}>
        <span style={{float: 'left'}}>
            <button>{'<-'}</button>
        </span>
        <span>TASK</span>
        <span style={{float: 'right'}}>
            <button>{'->'}</button>
        </span>
    </div>
)

export default Task;