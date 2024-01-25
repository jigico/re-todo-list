import React, { useState } from 'react'
import List from './List';

export default function TodoList({todoData}) {
  const [data, setData] = useState(todoData);

  //완료/취소 기능
  const toggleDoneState = (id) => {
    return function(){ 
      let findData = todoData.find((el) => { 
        return el.id === id; 
      });
      findData.isDone = !findData.isDone; //상태 반전
      setData((prevData) => [findData, ...prevData]); 
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
      let findIdx = todoData.findIndex((el) => { //삭제할 아이템의 index를 구하고
        return el.id === id;
      });
      
      let newData = todoData.splice(findIdx,1); //splice로 삭제한다.
      setData(newData); //업데이트를 해준다.
    }
  }
  return (
    <>
      <List todoData={todoData} isActive={false} toggleDoneState={toggleDoneState} deleteItem={deleteItem} />
      <List todoData={todoData} isActive={true} toggleDoneState={toggleDoneState} deleteItem={deleteItem} />
    </>
  )
}
