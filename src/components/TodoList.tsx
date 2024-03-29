import { ITodo } from '../types/data';
import TodoItem from '../components/TodoItem';
interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

export default function TodoList(props: ITodoListProps) {
    const { items, removeTodo, toggleTodo } = props;

    return (
        <div>
            {
                items.map(todo =>
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />)
            }
        </div>
    )
}