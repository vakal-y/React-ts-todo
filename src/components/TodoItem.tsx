import { ITodo } from '../types/data';
interface ITodoItemProps extends ITodo { };

export default function TodoItem(props: ITodoItemProps) {
    const { id, title, complete } = props;

    return (
        <div></div>
    )
}