export const updateCategoryInput = (input) => ({
    type: 'UPDATE_CATEGORY_INPUT',
    input: input
})

export const addCategory = (category) => ({
    type: 'ADD_CATEGORY',
    category: category,
});

export const removeCategory = (category) => ({
    type: 'REMOVE_CATEGORY',
    category: category,
});

export const moveCategoryLeft = (category) => ({
    type: 'MOVE_CATEGORY_LEFT',
    category: category,
});

export const moveCategoryRight = (category) => ({
    type: 'MOVE_CATEGORY_RIGHT',
    category: category,
});

export const addTask = (task) => ({
    type: 'ADD_TASK',
    task: task.task,
    category: task.category
});

export const removeTask = (task) => ({
    type: 'REMOVE_TASK',
    task: task,
});

export const moveTaskLeft = (task) => ({
    type: 'MOVE_TASK_LEFT',
    task: task,
});

export const moveTaskRight = (task) => ({
    type: 'MOVE_TASK_RIGHT',
    task: task,
});