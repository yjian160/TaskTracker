const TaskTrackerReducers = (state={categories: [], tasks: [], categoryInput: ''}, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            console.log(state.categories, action.category)
            if (state.categories.indexOf(action.category.toString().toUpperCase()) === -1) {
                return Object.assign({}, state, {categories: state.categories.concat(action.category.toString().toUpperCase())});
            } else {
                return state;
            }
        case 'REMOVE_CATEGORY':
            state.categories.splice(state.categories.indexOf(category), 1);
            return Object.assign({}, state, {categories: state.categories});
        case 'UPDATE_CATEGORY_INPUT':
            return Object.assign({}, state, {categoryInput: action.input});
        case 'ADD_TASK':
            if (state.tasks.some((e) => (e.task === action.task && e.category === action.category))) {
                return state;
            } else {
                return Object.assign({}, state, {tasks: state.tasks.concat({task: action.task, category: action.category})});
            }
        default:
            return state;
    }
}

export default TaskTrackerReducers;