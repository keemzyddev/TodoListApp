import React from "react";
import Todo from "./Todo/Todo";

const Todos = ({ id, todos, deleteTodo, onComplete }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          onComplete={onComplete}
        />
      ))}
    </>
  );
};

export default Todos;
