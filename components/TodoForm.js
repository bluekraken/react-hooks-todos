import { useState, useContext, useEffect } from "react";
import TodosContext from "../src/context";

const TodoForm = () => {
  const [text, setText] = useState("");
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.guid) {
      setText(currentTodo.text);
    } else {
      setText("");
    }
  }, [currentTodo.guid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      dispatch({ type: "SET_CURRENT_TODO", todo: {} });
      return;
    }

    if (currentTodo.guid) {
      dispatch({ type: "UPDATE_TODO", todo: { ...currentTodo, text } });
    } else {
      dispatch({ type: "ADD_TODO", text });
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-black border-solid border-2"
      />
    </form>
  );
};

export default TodoForm;
