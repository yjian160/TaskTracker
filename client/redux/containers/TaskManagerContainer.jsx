import {connect} from 'react-redux';
import {addCategory, updateCategoryInput, removeCategory} from './../actions/TaskTrackerActions.jsx';
import TaskTracker from './../../components/TaskTracker.jsx';

let mapStateToProps = (state) => ({
    categories: state.TaskTrackerReducers.categories,
    categoryInput: state.TaskTrackerReducers.categoryInput
});

let mapStateToDispatch = (dispatch) => ({
    addCategory: (category) => {
        dispatch(addCategory(category));
    },
    updateCategoryInput: (input) => {
        dispatch(updateCategoryInput(input));
    }
});

const TaskManagerContainer = connect(mapStateToProps, mapStateToDispatch)(TaskTracker);
export default TaskManagerContainer;