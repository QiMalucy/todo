import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoStats from "./components/TodoStats";
import TodoList from "./components/TodoList";
import "./App.css";
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, completed

  // Handler functions remain here

  const getVisibleTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const visibleTodos = getVisibleTodos();
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const handleAddTodo = () => {
    if (input !== "") {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSaveEdit = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, text: editInput } : todo
    );
    setTodos(updatedTodos);
    setEditId(null);
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="App">
      <h1>待办事项列表</h1>
      <TodoInput onAddTodo={handleAddTodo} input={input} setInput={setInput} />
      <div className="view-selector">
        <button onClick={() => setFilter("all")}>全部</button>
        <button onClick={() => setFilter("active")}>未完成</button>
        <button onClick={() => setFilter("completed")}>已完成</button>
        <button onClick={handleClearCompleted}>清除已完成</button>
      </div>
      <TodoStats totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoList
        todos={visibleTodos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        editId={editId}
        editInput={editInput}
        setEditInput={setEditInput}
        onSaveEdit={handleSaveEdit}
      />
    </div>
  );
}

export default TodoApp;
