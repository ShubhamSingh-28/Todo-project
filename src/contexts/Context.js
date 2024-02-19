import { useContext,createContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (todo, id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = Todocontext.Provider

export const useTodo = () => {
    return useContext(Todocontext)
}