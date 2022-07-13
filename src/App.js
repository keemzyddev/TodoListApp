import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Todos from "./component/Todos/Todos";
import Header from "./component/Header/Header";
import Footer from "./component/Footer";
import Form from "./component/Form/Form";
import About from "./component/About";
import "./App.css";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Writing some JavaScript code",
      isComplete: true,
    },
    {
      id: 2,
      text: "Doing some JavaScript research",
      isComplete: true,
    },
    {
      id: 3,
      text: "Taking a nap",
      isComplete: false,
    },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  return (
    <Router>
      <div className="App">
        <Header
          onAdd={() => setShowAddTodo(!showAddTodo)}
          showAdd={showAddTodo}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div>{showAddTodo && <Form onAdd={addTodo} />}</div>
                <div>
                  {" "}
                  {todos.length > 0 ? (
                    <Todos
                      todos={todos}
                      deleteTodo={deleteTodo}
                      onComplete={onComplete}
                    />
                  ) : (
                    <h3>No Todo</h3>
                  )}{" "}
                </div>
                 <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
