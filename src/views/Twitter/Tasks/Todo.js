import React from "react";
import TodoItem from "../../../components/TodoItem";
import Instagram from "../../../components/Static/Instagram.png";
import Facebook from "../../../components/Static/FacebookLogo.png";

function Todo() {
  return (
    <div>
      <div className="cont">
        {/* <h6>Home / Tasks / Todo</h6> */}

        <div className="d-flex justify-content-between">
          <h6 className="status">Home / Tasks / IW Calender</h6>
          <div className="p-3 d-flex justify-content-end">
            <a href="/instagram/tasks/todo">
              <img src={Instagram} className="px-2" />
            </a>
            <a href="/facebook/tasks/todo">
              <img src={Facebook} className="px-2" />
            </a>
          </div>
        </div>

        <div className="bg-white pl-2 pr-2">
          <div className="d-flex w-100 justify-content-between align-items-center pl-3 pr-3">
            <h3 className="my-3">January</h3>
            {/* <div className="filterBox justify-content-end mb-0 w-50 no_box_shadow">
              <select
                name="userType"
                id="userType"
                className="dropDown w-50"
                placeholder="Enter hashtag/keyword"
              >
                <option value="none"></option>
                <option value="dev">Developer</option>
                <option value="normla">Normal</option>
              </select>
            </div> */}
          </div>
          <div className="d-flex flex-wrap p-3">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
