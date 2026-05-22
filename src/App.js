import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const canAdd = useMemo(() => todoText.trim().length > 0, [todoText]);

  const addTodo = () => {
    const text = todoText.trim();
    if (!text) return;

    const id = Date.now() + Math.random();
    setTodos((prev) => [{ id, text }, ...prev]);
    setTodoText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>

      <div className="composer">
        <input
          className="input"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Type your todo..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTodo();
          }}
        />
        <button className="addBtn" onClick={addTodo} disabled={!canAdd}>
          Add
        </button>
      </div>

      <div className="list">
        {todos.length === 0 ? (
          <div className="empty"></div>
        ) : (
          todos.map((t) => (
            <div key={t.id} className="todoRow">
              <div className="todoText">{t.text}</div>
              <button className="deleteBtn" onClick={() => deleteTodo(t.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

