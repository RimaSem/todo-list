import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

function Content() {
  return (
    <div className="content">
      <div className="content-btns">
        <button className="sort-btn">Important</button>
        <button className="new-task-btn">
          <Icon path={mdiPlus} size={0.8} /> Create Todo
        </button>
      </div>
    </div>
  );
}

export default Content;
