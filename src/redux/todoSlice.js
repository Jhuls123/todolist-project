import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        { id: Date.now(), title: "app", completed: false },
		{ id: Date.now(), title: "banana", completed: true   },
		{ id: Date.now(), title: "orange", completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }
            state.push(newTodo)
        },
        todoCompleted: (state, action) => {
            state.map(todos => {
                if(action.payload === todos.id) {
                    if(todos.completed === true) {
                        todos.completed = false
                    } else {
                        todos.completed = true
                    }
                }
            })
        },
        deleteTodo: (state, action) => {
            return state.filter(todoItem => todoItem.id !== action.payload.id)
        },
        editTodo: (state, action) => {
            return state.map(todoItem => todoItem.id === action.payload.id ? action.payload : todoItem)
        }
    }
})
export const { addTodo, todoCompleted, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;