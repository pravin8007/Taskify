import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { MdDelete, MdDone } from "react-icons/md";
import type { Todo } from "../model"; // Importing the Todo type
import { AiFillEdit } from "react-icons/ai";

interface Props {
    todo: Todo; // Single todo item
    todos: Todo[]; // Array of todo items
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update the todos state
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
    };


    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleEditClick = (id: number) => {
        if (edit) {
            setTodos(todos.map((t) => (t.id === id ? { ...t, todo: editTodo } : t)));
        }

        if (!todo.isDone) setEdit(!edit);
    };

    return (
        <form className={`todos_single ${todo.isDone ? "done" : ""}`} onSubmit={(e) => handleSubmit(e, todo.id)}>

            {edit ? (
                <input
                    className="todos_single--text"
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}/>

            ) : todo.isDone ? (
                <s className="todos_single--text">{todo.todo}</s>
            ) : (
                <span className="todos_single--text">{todo.todo}</span>
            )}

            <div>
                <span className="icon" onClick={() => handleEditClick(todo.id)}>
                    <AiFillEdit />
                </span>
                <span
                    className="icon"
                    onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                >
                    <MdDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
