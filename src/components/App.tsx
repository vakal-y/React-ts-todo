import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import { ITodo } from '../types/data';
import TodoList from "./TodoList";

export default function App() {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addTodo();
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }]);
            setValue('');
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return (
        <div>
            <div>
                <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    )
}