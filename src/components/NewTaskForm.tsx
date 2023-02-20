import { useRef } from "react";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { nanoid } from "nanoid";

type NewTaskFormProps = {
  setTaskFormActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function NewTaskForm({ setTaskFormActive }: NewTaskFormProps) {
  return (
    <div className="task-form-container">
      <form>
        <div className="task-form-header">
          <h3>Add new task</h3>
          <div className="icon" onClick={() => setTaskFormActive(false)}>
            <Icon className="close-btn" path={mdiWindowClose} />
          </div>
        </div>
        <div className="task-form-body">
          <label htmlFor="taskTitle">Title</label>
          <input id="taskTitle" name="taskTitle" required />
          <label htmlFor="taskDetails">Details</label>
          <textarea id="taskDetails" name="taskDetails" />
          <label htmlFor="taskDate">Date</label>
          <input type="date" id="taskDate" name="taskDate" />
          <label htmlFor="taskTime">Time</label>
          <input type="time" id="taskTime" name="taskTime" />
          <label htmlFor="taskList">List</label>
          <select id="taskList" name="taskList">
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
          </select>
          <div className="checkbox-container">
            <input type="checkbox" id="important" name="important" />
            <label htmlFor="important">Important</label>
          </div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default NewTaskForm;
