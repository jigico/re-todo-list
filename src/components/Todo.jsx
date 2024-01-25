import React from 'react'

export default function Todo({todoData, deleteItem, toggleDoneState}) {
  const {title, contents, isDone} = todoData;
  return (
    <li className={isDone ? 'item done' : 'item'}>
      <h3 className='title'>{title}</h3>
      <p className='contents'>{contents}</p>
      <div className='btn-box'>
        <button type='button' className='btn-red' onClick={deleteItem}>삭제</button>
        {
          isDone === true ? <button type='button' className='btn-green' onClick={toggleDoneState}>취소</button> : <button type='button' className='btn-green' onClick={toggleDoneState}>완료</button>
        }
      </div>
    </li>
  )
}
