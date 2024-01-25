import React from 'react';
import {v4 as uuidv4} from 'uuid'

export default function InputArea({todoData, setTodoData}) {
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
    if(title.trim() === ''){
      alert('제목을 입력해주세요.');
      e.target.title.focus();
      return
    }
    if(contents.trim() === ''){
      alert('내용을 입력해주세요.');
      e.target.contents.focus();
      return
    }

    setTodoData([newTodoObj, ...todoData]);
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
      
    </>
  )
}
