import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Đổi sang {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
