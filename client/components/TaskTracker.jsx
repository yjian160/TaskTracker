import React from 'react';
import Category from './Category.jsx';

let TaskTracker = (props) => {
    console.log(props);
    return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <span><input type="text"></input><button>Add Category</button></span>
        {props.categories.map(category => {
            <Category />
        })}
    </div>
)}

export default TaskTracker;