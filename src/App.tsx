import { useEffect, useState } from "react";
import TodoEditor from "./components/TodoEditor";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem('todos') || '[]'));
  const addTodo = (title: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: new Date().getTime(), // 고유 ID
        title,
        done: false,
      },
    ]);
  };
  const toggleTodo = (id: number) => {
    setTodos((todos) => 
      todos.map((todo) => 
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const modifyTodo = (id: number, title: string) => {
    setTodos((todos) => 
      todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };
  // todos 상태 값이 변경될 때마다 localStorage에 저장
  // useEffect 훅으로 업데이트, 사이드 이펙트로 처리
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="todo">
      <TodoHeader />
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} modifyTodo={modifyTodo} />
    </div>
  );
}