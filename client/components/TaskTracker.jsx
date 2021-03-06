import React from 'react';
import Category from './Category.jsx';

let TaskTracker = (props) => {
    console.log(props);
    return (
    <div>
        <div>
    <input type="text" value={props.categoryInput} onChange={(e) => {props.updateCategoryInput(e.target.value)}}></input>
            <button onClick={() => {if (props.categoryInput !== '') {props.addCategory(props.categoryInput)}}}>Add Category</button>
        </div>
        <div style={{display: 'inline-flex', flexDirection: 'row'}}>
            {props.categories.map(category => (<Category name={category} moveCategoryLeft={props.moveCategoryLeft} moveCategoryRight={props.moveCategoryRight}/>))}
        </div>
    </div>
)}

export default TaskTracker;