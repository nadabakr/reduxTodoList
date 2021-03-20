import { ADD_TASK, DELETE_TASK } from "./Actions";

const initState = {
    todoList: [],
};
export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                todoList: [...state.todoList.filter((todo, i) => i !== action.payload)],
            };
        default:
            return state;
    }
};