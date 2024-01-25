import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import TodoList from './TodoList';

export default function InputArea() {
  const [todoData, setTodoData] = useState([{
    id:1,
    title:'테스트',
    contents:'테스트22',
    isDone:false
  }]);

  //form submit
  const formHandler = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const contents = e.target.contents.value;
    const id = uuidv4();
    const newTodoObj = {
      id,
      title,
      contents,
      isDone:false
    }
    setTodoData((prev) => [newTodoObj, ...prev]);
    e.target.reset();
  }

  return (
    <>
      <form className='todo-input-area' onSubmit={formHandler}>
        <div>
          <label>제목 <input type='text' name='title' className='input' /></label>
          <label>내용 <input type='text' name='contents' className='input' /></label>
        </div>
        <button type='submit' className='btn-blue'>추가하기</button>
      </form>
      <TodoList todoData={todoData} />
    </>
  )
}
