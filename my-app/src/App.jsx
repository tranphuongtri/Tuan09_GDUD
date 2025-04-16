import Counter from './features/counter/Counter';
import TodoList from './features/todo/TodoList';
import ThemeToggle from './features/theme/ThemeToggle';
import { useSelector } from 'react-redux';

export default function App() {
  const theme = useSelector(state => state.theme);

  return (
    <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center">🛠 React Redux Vite + Tailwind</h1>
        <ThemeToggle />
        <Counter />
        <TodoList />
      </div>
    </div>
  );
}
