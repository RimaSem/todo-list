import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Todo from "./Todo";
import NewTaskForm from "./NewTaskForm";

function Content() {
  const [taskFormActive, setTaskFormActive] = useState(false);
  return (
    <>
      {taskFormActive && <NewTaskForm setTaskFormActive={setTaskFormActive} />}
      <div className="content">
        <div className="content-btns">
          <button className="sort-btn">Important</button>
          <button
            className="new-task-btn"
            onClick={() => setTaskFormActive(true)}
          >
            <Icon path={mdiPlus} size={0.8} /> Create Todo
          </button>
        </div>
        <Todo />
      </div>
    </>
  );
}

export default Content;
