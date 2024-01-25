import React, { useState } from 'react'
import List from './List';

export default function TodoList({todoData, setTodoData}) {
  
  return (
    <>
      <List todoData={todoData} setTodoData={setTodoData} isActive={false} />
      <List todoData={todoData} setTodoData={setTodoData} isActive={true} />
    </>
  )
}
