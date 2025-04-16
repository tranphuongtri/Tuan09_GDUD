import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';
import { useState } from 'react';

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="p-4 border rounded shadow bg-gray-100 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4">📝 To-do List</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="flex-grow p-2 rounded border dark:bg-gray-700"
          placeholder="Nhập công việc..."
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white dark:bg-gray-700 p-2 rounded shadow"
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
