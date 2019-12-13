import {connect} from 'react-redux';
import {addCategory, removeCategory} from './../actions/TaskTrackerActions.jsx';
import TaskTracker from './../../components/TaskTracker.jsx';

let mapStateToProps = (state) => ({
    categories: state.TaskTrackerReducers.categories
});

let mapStateToDispatch = (dispatch) => ({
    addCategory: (category) => {
        dispatch(addCategory(category));
    }
});

const TaskManagerContainer = connect(mapStateToProps, mapStateToDispatch)(TaskTracker);
export default TaskManagerContainer;