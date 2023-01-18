import React, { useContext, useState } from 'react'
import AppContext from '../todoAppContext';

export default function AddTask({ initValue }) {

  const { dispatch } = useContext(AppContext);

  const [itemTitle, setItemTitle] = useState(initValue);

  const btnAdd_Clicked = function () {
    const newItem = {
      id: Math.floor(Math.random() * 100),
      title: itemTitle,
      complete: false
    }

    setItemTitle('');

    dispatch({
      type: 'add_item',
      payload: newItem
    });
  }

  const txtItemTitle_Changed = function (e) {
    setItemTitle(e.target.value);
  }

  const txtItemTitle_KeyUp = function (e) {
    if (e.keyCode === 13) {
      btnAdd_Clicked();
    }
  }

  return (
    <div>
      <h3>Add Item</h3>
      <div className="fg">
        <input type="text" value={itemTitle} onChange={txtItemTitle_Changed} onKeyUp={txtItemTitle_KeyUp} />
        <button type="button" onClick={btnAdd_Clicked}>Add</button>
      </div>
    </div>
  )
}

