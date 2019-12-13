export const updateCategoryInput = (input) => ({
    type: 'UPDATE_CATEGORY_INPUT',
    input: input
})

export const addCategory = (category) => ({
    action: 'ADD_CATEGORY',
    category: category,
});

export const removeCategory = (category) => ({
    action: 'REMOVE_CATEGORY',
    category: category,
});

export const moveCategoryLeft = (category) => ({
    action: 'MOVE_CATEGORY_LEFT',
    category: category,
});

export const moveCategoryRight = (category) => ({
    action: 'MOVE_CATEGORY_RIGHT',
    category: category,
});

export const addTask = (task) => ({
    action: 'ADD_TASK',
    task: task,
});

export const removeTask = (task) => ({
    action: 'REMOVE_TASK',
    task: task,
});

export const moveTaskLeft = (task) => ({
    action: 'MOVE_TASK_LEFT',
    task: task,
});

export const moveTaskRight = (task) => ({
    action: 'MOVE_TASK_RIGHT',
    task: task,
});