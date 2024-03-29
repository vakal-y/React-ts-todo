import { useState, useEffect, useRef } from "react";
import { ITodo } from '../types/data';
import TodoList from "./TodoList";

export default function App() {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<ITodo[]>([]);

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

    return (
        <div>
            <div>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} />
        </div>
    )
}