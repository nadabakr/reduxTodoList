export const ADD_TASK = "ADD-TASK";
export const DELETE_TASK = "DELETE-TASK";
export const addTodo = (title, content) => {
    return {
        type: ADD_TASK,
        payload: {
            title: title,
            content: content,
        },
    };
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TASK,
        payload: index,
    };
};