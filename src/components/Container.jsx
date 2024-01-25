import React, { useState } from 'react'
import InputArea from './InputArea'
import TodoList from './TodoList';

export default function Container() {
  const [todoData, setTodoData] = useState([]);

  return (
    <main>
      <InputArea todoData={todoData} setTodoData={setTodoData} />
      <TodoList todoData={todoData} setTodoData={setTodoData} />
    </main>
  )
}
