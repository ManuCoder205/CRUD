import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

export default TodoList;
