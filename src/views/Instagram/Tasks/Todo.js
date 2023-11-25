import React from "react";
import TodoItem from "../../../components/TodoItem";
import Facebook from '../../../components/Static/FacebookLogo.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function Todo() {
  return (
    <div>
      <div className="cont">
    
        <h6>Home / Tasks / Todo</h6>

        <div className="d-flex justify-content-between"> 
        <h2 className='status'>
          Todo
        </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/facebook/tasks/todo"><img src={Facebook} className="px-2" /></a>
          <a href="/twitter/tasks/todo"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

        
        <div className="bg-white pl-2 pr-2">
          <div className="d-flex w-100 justify-content-between align-items-center pl-3 pr-3">
            <h3>January</h3>
            <div className="filterBox justify-content-end mb-0 w-50">
              <select name="userType" id="userType" className="dropDown w-50" placeholder="Enter hashtag/keyword">
                <option value="none"></option>
                <option value="dev">Developer</option>
                <option value="normla">Normal</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-wrap p-3">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
