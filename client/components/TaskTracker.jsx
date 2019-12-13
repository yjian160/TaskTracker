import React from 'react';
import Category from './Category.jsx';

let TaskTracker = (props) => {
    console.log(props);
    return (
    <div>
        <div>
            <input type="text" onChange={(e) => {props.updateCategoryInput(e.target.value)}}></input>
            <button onClick={() => props.addCategory(props.categoryInput)}>Add Category</button>
        </div>
        <div style={{display: 'inline-flex', flexDirection: 'row'}}>
            {props.categories.map(category => (<Category name={category} />))}
        </div>
    </div>
)}

export default TaskTracker;