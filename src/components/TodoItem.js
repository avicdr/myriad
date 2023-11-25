import React from "react";

function TodoItem() {
  return (
    <div className="todoItem w-30 p-3">
      <div className="d-flex justify-content-between m-2">
        <div className="fntSz19 passwordlabel">Jan 1</div>
        <button className="btn-sm">Edit</button>
      </div>
      <div className="todoDescription">
        As Rahul Gandhi’s Bharat Jodo Yatra enters the UT of Jammu & Kashmir
      </div>
    </div>
  );
}

export default TodoItem;
