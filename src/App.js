import React, { useEffect, useReducer } from 'react'

import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';

import AppContext from './todoAppContext';
import reducer from './todoAppReducer';

function App() {

  const initialAppState = {
    query: '',
    items: []
  }
  const [store, dispatch] = useReducer(reducer, initialAppState);

  useEffect(function () {
    setTimeout(function () {
      const items_from_backend = [
        { id: 1, title: 'Setup cloudformation', complete: false },
        { id: 2, title: 'Học react', complete: false },
        { id: 3, title: 'Chuẩn bị template cho dự án mới', complete: false },
      ];

      dispatch({
        type: 'init',
        payload: {
          items: items_from_backend,
          query: ''
        }
      });

    }, 300);
  }, []);

  return (
    <div className="container">
      <AppContext.Provider value={{ store, dispatch }}>
        <SearchBar initQuery="" />
        <TodoList />
        <AddTask initValue="" />
      </AppContext.Provider>
    </div>
  );
}

export default App;

