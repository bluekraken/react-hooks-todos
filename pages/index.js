import { useContext, useReducer } from "react";
import Head from "next/head";
import TodosContext from "../src/context";
import reducer from "../src/reducer";
import TodoForm from "../components/TodoForm";
import TodosList from "../components/TodosList";

const HomePage = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div>
        <Head>
          <title>React Hooks Todos</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <TodoForm />
          <TodosList />
        </main>
      </div>
    </TodosContext.Provider>
  );
};

export default HomePage;
