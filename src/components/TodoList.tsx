import { ITodo } from '../types/data';
import TodoItem from '../components/TodoItem';
interface ITodoListProps {
    items: ITodo[];
}

export default function TodoList(props: ITodoListProps) {
    return (
        <div>
            {
                props.items.map(todo => <TodoItem key={todo.id} {...todo} />)
            }
        </div>
    )
}