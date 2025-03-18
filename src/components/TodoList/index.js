import TodoItem from './TodoItem';
function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo, editId, editInput, setEditInput, onSaveEdit }) {
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            
            editId={editId}
            editInput={editInput}
            setEditInput={setEditInput}
            onSaveEdit={onSaveEdit}
          />
        ))}
      </ul>
    );
  }
  export default TodoList;
  