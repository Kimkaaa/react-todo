import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

export default function TodoListItem({
    todo, toggleTodo,
}: { 
    todo: Todo;
    toggleTodo: (id: number) => void;
}) {
    return (
        // 할 일을 완료하면 .todo__item--complete 추가
        <li className={`todo__item ${todo.done && "todo__item--complete"}`}>
            <Checkbox parentClassName="todo__checkbox-group"
                type="checkbox" className="todo__checkbox"
                checked={todo.done} onChange={() => toggleTodo(todo.id)}>
                {todo.title}
            </Checkbox>
            {/* 할 일을 수정할 때만 노출  */}
            {/* <input type='text' className='todo__modify-input' /> */}
            <div className="todo__button-group">
                <Button className="todo__action-button">
                    <SvgPencil />
                </Button>
                <Button className="todo__action-button">
                    <SvgClose />
                </Button>
            </div>
        </li>
    );
}