import React from 'react'
import Todo from './Todo';

export default function List({todoData, isActive, toggleDoneState, deleteItem}) {
  //완료 데이터
  const viewData = todoData.filter((el) => {
    return el.isDone === isActive;
  });

  return (
    <>
      <h2 className='pageTitle'>{isActive ? '🔥 Working' : '🎉 Done'}</h2>
      <ul className='todo-list'>
        {
          viewData.map((todo) => {
            let id = todo.id;
            return <Todo key={todo.id} todoData={todo} toggleDoneState={toggleDoneState(id)} deleteItem={deleteItem(id)} />
          })
        }
      </ul>
    </>
  )
}
