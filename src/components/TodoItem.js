import React, { useContext } from 'react'
import AppContext from '../todoAppContext';

export default function TodoItem({ item }) {

  const { dispatch } = useContext(AppContext);

  const btnDel_Clicked = function () {
    dispatch({
      type: 'complete_task',
      payload: {
        itemId: item.id
      }
    });
  }

  return (
    <li className={item.complete ? 'done' : ''}>
      {item.title}
      {!item.complete && <button onClick={btnDel_Clicked}>Done</button>}
    </li>
  )
}

