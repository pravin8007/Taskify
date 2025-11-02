import React from 'react'
import './styles.css'
import type { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[]; // Array of todo items
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update the todos state
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {
      [...todos].reverse().map((todo) => (
        <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))
      }

    </div>
  )
}

export default TodoList
