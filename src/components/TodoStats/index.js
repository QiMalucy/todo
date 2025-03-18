// components/TodoList/index.js
function TodoStats({ totalTodos, completedTodos }) {
  return (
    <div className="todo-stats">
      <p>总任务数: {totalTodos}</p>
      <p>已完成任务数: {completedTodos}</p>
    </div>
  );
}
export default TodoStats;