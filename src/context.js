import { createContext } from "react";

const TodosContext = createContext({
  todos: [
    { guid: "12b02506-0cb6-4d62-847e-d0325e796e09", text: "Learn javascript", complete: false },
    { guid: "138d75f3-9b70-49b3-a54d-8b9c31e2334f", text: "Learn next.js", complete: false },
    { guid: "996b38f0-751a-4b01-bb04-39cb7fd0f107", text: "Do the washing up!", complete: true }
  ],
  currentTodo: {}
});

export default TodosContext;
