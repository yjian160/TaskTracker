import React from 'react';
import Task from './Task.jsx';

let Category = () => (
    <div style={{width: "200", border: '1px solid black', textAlign: 'center', padding: '5', margin: '10'}}>
        <div>
            <span style={{float: 'left'}}>
                <button>{'<-'}</button>
            </span>
            <span>TITLE</span>
            <span style={{float: 'right'}}>
                <button>{'->'}</button>
            </span>
        </div>
        <div><Task /></div>
    </div>
)

export default Category;