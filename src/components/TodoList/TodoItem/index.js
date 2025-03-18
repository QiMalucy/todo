
function TodoItem({ todo, onToggleTodo, onDeleteTodo, onEditTodo, editId, editInput, setEditInput, onSaveEdit }) {
  return (
    <li style={{ backgroundColor: todo.completed ? '#c1c1c1' : '#f1f1f1' }}>
      <button onClick={() => onToggleTodo(todo.id)}>
        {todo.completed ? '√' : 'X'}
      </button>
      {editId === todo.id ? (
        <input
          type="text"
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          onBlur={onSaveEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSaveEdit();
          }}
        />
      ) : (
        <>
          <span>{todo.text}</span>
         
        </>
      )}
      <button onClick={() => onDeleteTodo(todo.id)}>删除</button>
    </li>
  );
}
export default TodoItem;
