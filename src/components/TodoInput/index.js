// components/TodoForm/index.js
function TodoInput({ onAddTodo, input, setInput }) {
  return (
    <div className='todo-input'>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="添加新的待办事项"
      />
      <button onClick={onAddTodo}>添加</button>
    </div>
  );
}
export default TodoInput;