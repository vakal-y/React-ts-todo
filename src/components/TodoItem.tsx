import { ITodo } from '../types/data';
interface ITodoItemProps extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

export default function TodoItem(props: ITodoItemProps) {
    const { id, title, complete, removeTodo, toggleTodo } = props;

    return (
        <div>
            <input
                type='checkbox'
                checked={complete}
                onChange={() => toggleTodo(id)}
            />
            {title}
            <button onClick={() => removeTodo(id)}>x</button>
        </div>
    )
}