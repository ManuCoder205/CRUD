import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <div style={{ padding: "20px" }}>
        <h2>Todo App (Context API + CRUD)</h2>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
