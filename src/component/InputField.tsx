import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>; // Function to update the todo state
    handleAddTodo: (e: React.FormEvent) => void; // Function to handle adding a new todo
}


const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => {
            handleAddTodo(e);
            inputRef.current?.blur(); // Remove focus from input after submitting
        }}>
            <input type="input"
                ref={inputRef}
                placeholder='Enter a Task'
                className='input_box'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='input_submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField
