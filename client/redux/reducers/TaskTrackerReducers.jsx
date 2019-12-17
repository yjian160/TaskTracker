const TaskTrackerReducers = (state={categories: [], tasks: [], categoryInput: ''}, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            if (state.categories.indexOf(action.category.toString().toUpperCase()) === -1) {
                return Object.assign({}, state, {categories: state.categories.concat(action.category.toString().toUpperCase()), categoryInput: ''});
            } else {
                return state;
            }
        case 'REMOVE_CATEGORY':
            state.categories.splice(state.categories.indexOf(category), 1);
            return Object.assign({}, state, {categories: state.categories});
        case 'UPDATE_CATEGORY_INPUT':
            return Object.assign({}, state, {categoryInput: action.input});
        case 'MOVE_CATEGORY_LEFT':
            if (state.categories.indexOf(action.category) > 0) {
                let newCategories = state.categories.slice();
                let index = state.categories.indexOf(action.category);
                let temp = newCategories[index];
                newCategories[index] = newCategories[index-1];
                newCategories[index-1] = temp;
                return Object.assign({}, state, {categories: newCategories});
            }
            return state;
        case 'MOVE_CATEGORY_RIGHT':
            if (state.categories.indexOf(action.category) < state.categories.length-1) {
                let newCategories = state.categories.slice();
                let index = state.categories.indexOf(action.category);
                let temp = newCategories[index];
                newCategories[index] = newCategories[index+1];
                newCategories[index+1] = temp;
                return Object.assign({}, state, {categories: newCategories});
            }
            return state;
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