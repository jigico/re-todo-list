import React from 'react'
import Todo from './Todo';

export default function List({todoData, setTodoData, isActive}) {

  //완료/취소 기능
  const toggleDoneState = (id) => {
    return function(){ 
      let newArr = [...todoData];
      let findIdx = todoData.findIndex((el) => el.id === id);//변경할 아이템의 index
      newArr[findIdx].isDone = !newArr[findIdx].isDone;
      setTodoData(newArr); 
    }
  }

  //삭제 기능
  const deleteItem = (id) => {
    return function(){
      //삭제여부 체크
      if(!window.confirm('정말 삭제하겠습니까?')){
        alert('삭제를 취소했습니다.');
        return;
      }

      let newData = todoData.filter((el) => el.id !== id);
      setTodoData(newData);
    }
  }

  return (
    <>
      <h2 className='pageTitle'>{isActive ? '🔥 Working' : '🎉 Done'}</h2>
      <ul className='todo-list'>
        {
          todoData.filter((el) => {
            return el.isDone === isActive;
          })
          .map((todo) => {
            const id = todo.id;
            return <Todo key={todo.id} todoData={todo} setTodoData={setTodoData} deleteItem={deleteItem(id)} toggleDoneState={toggleDoneState(id)} />
          })
        }
      </ul>
    </>
  )
}
