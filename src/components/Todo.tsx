import { useState, useRef } from "react";
import Icon from "@mdi/react";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";

function Todo() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="todo-container"
      onClick={() => {
        setShowDetails((prev) => !prev);
      }}
    >
      <div className="todo-main-row">
        <input className="todo-checkbox" type="checkbox" />
        <span className="todo-title">Walk the dog</span>
        <div className="todo-btns">
          <Icon className="todo-edit-btn" path={mdiPencil} />
          <Icon className="todo-delete-btn" path={mdiTrashCanOutline} />
        </div>
      </div>
      {showDetails && (
        <div className="todo-details">
          <p>
            <span>Title:</span> Walk the dog
          </p>
          <p>
            <span>Details:</span> use the blue leash and don't forget poop bags
          </p>
          <p>
            <span>Date:</span> 2023-10-10
          </p>
          <p>
            <span>Time:</span> 4:30pm
          </p>
          <p>
            <span>Todo list:</span> general
          </p>
        </div>
      )}
    </div>
  );
}

export default Todo;
