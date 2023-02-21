import { useState, useRef } from "react";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { nanoid } from "nanoid";
import Todo from "./Todo";

type NewTaskFormProps = {
  setAllTasks: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  setTaskFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleTaskDelete: (id: string) => void;
  editTask: (id: string) => void;
};

function NewTaskForm({
  setAllTasks,
  setTaskFormActive,
  handleTaskDelete,
  editTask,
}: NewTaskFormProps) {
  const formRef = useRef<any>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setAllTasks((prev) => [
      ...prev,
      <Todo
        key={nanoid()}
        id={nanoid()}
        title={formRef.current[0].value}
        details={formRef.current[1].value}
        date={formRef.current[2].value}
        time={formRef.current[3].value}
        list={formRef.current[4].value}
        isImportant={formRef.current[5].checked}
        handleTaskDelete={handleTaskDelete}
        editTask={editTask}
      />,
    ]);
    setTaskFormActive(false);
  }

  return (
    <div className="task-form-container">
      <form ref={formRef} onSubmit={handleSubmit}>
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
