const TaskTrackerReducers = (state={categories: [], tasks: [], categoryInput: ''}, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            console.log('hit');
            return Object.assign({}, state, {categories: state.categories.concat(action.category)});
        case 'REMOVE_CATEGORY':
            state.categories.splice(state.categories.indexOf(category), 1);
            return Object.assign({}, state, {categories: state.categories});
        case 'UPDATE_CATEGORY_INPUT':
            return Object.assign({}, state, {categoryInput: action.input});
        default:
            return state;
    }
}

export default TaskTrackerReducers;