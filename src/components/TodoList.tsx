import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList({
    todos, toggleTodo, 
}: { 
    todos: Todo[];
    toggleTodo: (id: number) => void;
}) {
    return (
        <ul className="todo__list">
            {/* 할 일 목록이 없는 경우 */}
            {todos.length === 0 && <TodoListItemEmpty />}
            {/* 할 일 목록이 있는 경우 */}
            {todos.length > 0 && todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
}