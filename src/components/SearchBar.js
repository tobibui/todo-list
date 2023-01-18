import React, { useContext, useEffect, useState } from 'react'

import AppContext from '../todoAppContext';

export default function SearchBar({ initQuery }) {

  const { dispatch } = useContext(AppContext);

  const [term, setTerm] = useState(initQuery);

  useEffect(function () {
    dispatch({
      type: 'update_query',
      payload: {
        query: term
      }
    });
  }, [term, dispatch]);

  const txtTerm_Changed = function (e) {
    setTerm(e.target.value);
  }

  const btnClear_Clicked = function () {
    setTerm(initQuery);
  }

  const txtTerm_KeyUp = function (e) {
    if (e.keyCode === 27) {
      btnClear_Clicked();
    }
  }

  return (
    <div>
      <label style={{ fontWeight: 'bold' }}>
        Filter tasks (by name)
        <div className="fg">
          <input type="text" value={term} onChange={txtTerm_Changed} onKeyUp={txtTerm_KeyUp} />
          <button type="button" onClick={btnClear_Clicked}>Clear</button>
        </div>
      </label>
    </div>
  )
}

