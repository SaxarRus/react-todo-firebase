import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, useMatch } from "react-router-dom";

import useApi from "./hooks/useApi";

import TaskListContainer from './containers/TaskListContainer'

function App() {

  const { data: { lists } } = useApi()

  return (
    <div className="App">
      <div className="header">
        <h1>My ToDo list</h1>
      </div>
      <div className="content">
        <div className="leftMenu">
          <ul className="leftMenuList">
            <li className="leftMenuListElem">
              <Link className="leftMenuLink" to="/all">Other tasks</Link>
            </li>
            {lists.map(item =>
              <li className="leftMenuListElem" key={item.id}>
                <Link className="leftMenuLink" to={item.id}>{item.title}</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="lists">
          <Routes>
            <Route path='/:listId' element={<TaskListContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  )

}

export default App;
