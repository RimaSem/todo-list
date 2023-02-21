import { useState, useRef } from "react";
import Icon from "@mdi/react";
import { mdiPlus, mdiWindowClose } from "@mdi/js";
import Todo from "./Todo";
import { nanoid } from "nanoid";

function Content() {
  const [taskFormActive, setTaskFormActive] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [allTasks, setAllTasks] = useState<any[]>([
    {
      id: "235f",
      component: (
        <Todo
          key="235f"
          id="235f"
          title="Walk the cat"
          details="for potty and exploring"
          date="2023-02-02"
          time="22:44"
          list="general"
          isImportant={true}
          handleTaskDelete={handleTaskDelete}
          handleTaskEdit={handleTaskEdit}
        />
      ),
    },
    {
      id: "236f",
      component: (
        <Todo
          key="236f"
          id="236f"
          title="Walk the parrot"
          details="for potty and exploring"
          date="2024-02-02"
          time="18:00"
          list="work"
          isImportant={false}
          handleTaskDelete={handleTaskDelete}
          handleTaskEdit={handleTaskEdit}
        />
      ),
    },
  ]);
  const formRef = useRef<any>(null);
  const [taskData, setTaskData] = useState({
    id: "",
    title: "",
    details: "",
    date: "",
    time: "",
    list: "",
    isImportant: false,
  });

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    // if isEdited, then update tasks list, and turn off isEdited
    if (isEdited) {
      setAllTasks((prev) =>
        prev.map((item) => {
          if (taskData.id === item.id) {
            return {
              ...item,
              component: (
                <Todo
                  key={taskData.id}
                  id={taskData.id}
                  title={formRef.current[0].value}
                  details={formRef.current[1].value}
                  date={formRef.current[2].value}
                  time={formRef.current[3].value}
                  list={formRef.current[4].value}
                  isImportant={formRef.current[5].checked}
                  handleTaskDelete={handleTaskDelete}
                  handleTaskEdit={handleTaskEdit}
                />
              ),
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setAllTasks((prev) => [
        ...prev,
        {
          id: nanoid(),
          component: (
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
              handleTaskEdit={handleTaskEdit}
            />
          ),
        },
      ]);
    }

    resetForm();
    setTaskFormActive(false);
  }

  function handleTaskDelete(id: string) {
    setAllTasks((prev) => prev.filter((task) => task.props.id !== id));
  }

  function handleTaskEdit(taskInfo: {
    id: string;
    title: string;
    details: string;
    date: string;
    time: string;
    list: string;
    isImportant: boolean;
  }) {
    setTaskData(taskInfo);
    setIsEdited(true);
    setTaskFormActive(true);
  }

  function resetForm() {
    setTaskData({
      id: "",
      title: "",
      details: "",
      date: "",
      time: "",
      list: "",
      isImportant: false,
    });
  }

  return (
    <>
      {taskFormActive && (
        <div className="task-form-container">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="task-form-header">
              <h3>{isEdited ? "Edit" : "Add new"} task</h3>
              <div
                className="icon"
                onClick={() => {
                  setTaskFormActive(false);
                  setIsEdited(false);
                }}
              >
                <Icon className="close-btn" path={mdiWindowClose} />
              </div>
            </div>
            <div className="task-form-body">
              <label htmlFor="taskTitle">Title</label>
              <input
                id="taskTitle"
                name="taskTitle"
                defaultValue={taskData.title || ""}
                required
              />
              <label htmlFor="taskDetails">Details</label>
              <textarea
                id="taskDetails"
                name="taskDetails"
                defaultValue={taskData.details || ""}
              />
              <label htmlFor="taskDate">Date</label>
              <input
                type="date"
                id="taskDate"
                name="taskDate"
                defaultValue={taskData.date || ""}
              />
              <label htmlFor="taskTime">Time</label>
              <input
                type="time"
                id="taskTime"
                name="taskTime"
                defaultValue={taskData.time || ""}
              />
              <label htmlFor="taskList">List</label>
              <select
                id="taskList"
                name="taskList"
                defaultValue={taskData.list || ""}
              >
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="shopping">Shopping</option>
              </select>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="important"
                  name="important"
                  defaultChecked={taskData.isImportant}
                />
                <label htmlFor="important">Important</label>
              </div>
              <button>{isEdited ? "Save" : "Add"}</button>
            </div>
          </form>
        </div>
      )}
      <div className="content">
        <div className="content-btns">
          <button className="sort-btn">Important</button>
          <button
            className="new-task-btn"
            onClick={() => {
              resetForm();
              setTaskFormActive(true);
            }}
          >
            <Icon path={mdiPlus} size={0.8} /> Create Todo
          </button>
        </div>
        {allTasks.map((item) => item.component)}
      </div>
    </>
  );
}

export default Content;
