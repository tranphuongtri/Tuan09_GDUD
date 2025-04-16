import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Count: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600 transition"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-pink-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
