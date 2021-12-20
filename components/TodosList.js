import { useContext } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import TodosContext from "../src/context";

const TodosList = () => {
  const {
    state: { todos },
    dispatch
  } = useContext(TodosContext);
  const title = todos.length > 0 ? `${todos.length} todos` : "Nothing to do!";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-2xl font-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {todos.map((todo) => (
          <li
            key={todo.guid}
            className="flex items-center bg-orange-600 border-black border-dashed border-2 my-2 py-4 pr-2"
          >
            <span
              onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", todo })}
              className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-gray-900"}`}
            >
              {todo.text}
            </span>
            <FaPencilAlt
              onClick={() => dispatch({ type: "SET_CURRENT_TODO", todo })}
              color="blue"
              title="Edit icon"
              className="cursor-pointer"
            />
            <FaTrash
              onClick={() => dispatch({ type: "DELETE_TODO", guid: todo.guid })}
              color="gray"
              title="Delete icon"
              className="cursor-pointer ml-1"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
