import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Todo from "./Todo";

function Content() {
  return (
    <div className="content">
      <div className="content-btns">
        <button className="sort-btn">Important</button>
        <button className="new-task-btn">
          <Icon path={mdiPlus} size={0.8} /> Create Todo
        </button>
      </div>
      <Todo />
    </div>
  );
}

export default Content;
