import React from "react";
import { FaTimes } from "react-icons/fa";

const Todo = ({ id, todo, deleteTodo, onComplete }) => {
  return (
    <div
      className={`todo ${todo.isComplete ? "isComplete" : ""}`}
      onDoubleClick={() => onComplete(todo.id)}
    >
      <h3>
        {todo.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTodo(todo.id)}
        />{" "}
      </h3>
    </div>
  );
};

export default Todo;
