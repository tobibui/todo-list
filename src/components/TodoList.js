import React, { useContext } from 'react'

import TodoItem from './TodoItem'
import AppContext from '../todoAppContext';

export default function TodoList(props) {

  const { store } = useContext(AppContext);

  return (
    <div>
      <h3>Todo của Tuyến Bùi</h3>
      <ul>
        {
          store.items
            .filter(item => item.title.toLowerCase().includes(store.query.toLowerCase()))
            .map(item => <TodoItem key={item.id} item={item} />)
        }
      </ul>
    </div>
  )
}


