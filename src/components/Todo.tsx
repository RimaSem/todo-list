import Icon from "@mdi/react";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";

function Todo() {
  return (
    <div className="todo-container">
      <div className="todo-main-row">
        <input className="todo-checkbox" type="checkbox" />
        <span className="todo-title">Walk the</span>
        <div className="todo-btns">
          <Icon className="todo-edit-btn" path={mdiPencil} />
          <Icon className="todo-delete-btn" path={mdiTrashCanOutline} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
