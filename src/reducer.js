const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (state.todos.findIndex((todo) => todo.text === action.text) > -1) {
        return state;
      }
      const newTodo = {
        guid: crypto.randomUUID(),
        text: action.text,
        complete: false
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      };

    case "DELETE_TODO":
      const filteredTodos = state.todos.filter((todo) => todo.guid !== action.guid);
      const isRemovedTodo = state.currentTodo.guid === action.guid ? {} : state.currentTodo;
      return {
        ...state,
        todos: filteredTodos,
        currentTodo: isRemovedTodo
      };

    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.todo
      };

    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map((todo) =>
        todo.guid === action.todo.guid ? { ...todo, complete: !todo.complete } : todo
      );
      return {
        ...state,
        todos: toggledTodos
      };

    case "UPDATE_TODO":
      if (state.todos.findIndex((todo) => todo.text === action.todo.text) > -1) {
        return {
          ...state,
          currentTodo: {}
        };
      }
      const updatedTodos = state.todos.map((todo) => (todo.guid === action.todo.guid ? action.todo : todo));
      return {
        ...state,
        todos: updatedTodos,
        currentTodo: {}
      };

    default:
      return state;
  }
};

export default reducer;
