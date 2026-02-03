import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList() {
    return (
        <ul className="todo__list">
            {/* 할 일 목록이 없는 경우 */}
            <TodoListItemEmpty />
            {/* 할 일 목록이 있는 경우 */}
            <TodoListItem />
        </ul>
    );
}