import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList({
    todos, toggleTodo, deleteTodo,
}: { 
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}) {
    return (
        <ul className="todo__list">
            {todos.length === 0 && <TodoListItemEmpty />}
            {todos.length > 0 && todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} 
                    toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
}