import React, { useState } from "react";
import './App.css';
import InputField from "./component/InputField";
import type { Todo } from "./model";
import TodoList from "./component/TodoList";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh on form submission
    if (todo) {
       if (todo.trim() === "") return;
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;