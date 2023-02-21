import { useState, useRef } from "react";
import Icon from "@mdi/react";
import { mdiPlus, mdiWindowClose } from "@mdi/js";
import Todo from "./Todo";
import { nanoid } from "nanoid";

type ContentProps = {
  allLists: { title: string | undefined; id: string }[];
  setAllLists: React.Dispatch<
    React.SetStateAction<
      {
        title: string | undefined;
        id: string;
      }[]
    >
  >;
  allTasks: any[];
  setAllTasks: React.Dispatch<React.SetStateAction<any[]>>;
  filterBy: string;
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
  // filteredTasks: any[];
  // setFilteredTasks: React.Dispatch<React.SetStateAction<any[]>>;
};

function Content({
  allLists,
  setAllLists,
  allTasks,
  setAllTasks,
  filterBy,
  setFilterBy,
}: ContentProps) {
  const [taskFormActive, setTaskFormActive] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [showImportant, setShowImportant] = useState(false);
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
    if (isEdited) {
      setAllTasks((prev) =>
        prev.map((item) => {
          if (taskData.id === item.id) {
            return {
              ...item,
              title: formRef.current[0].value,
              details: formRef.current[1].value,
              date: formRef.current[2].value,
              time: formRef.current[3].value,
              list: formRef.current[4].value,
              isImportant: formRef.current[5].checked,
            };
          } else {
            return item;
          }
        })
      );
      setIsEdited(false);
    } else {
      setAllTasks((prev) => [
        ...prev,
        {
          id: nanoid(),
          title: formRef.current[0].value,
          details: formRef.current[1].value,
          date: formRef.current[2].value,
          time: formRef.current[3].value,
          list: formRef.current[4].value,
          isImportant: formRef.current[5].checked,
        },
      ]);
    }
    resetForm();
    setFilterBy("");
    setTaskFormActive(false);
  }

  function handleTaskDelete(id: string) {
    setAllTasks((prev) => prev.filter((task) => task.id !== id));
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

  function displayTasks() {
    let newArr: any[] = [];

    function displayImportant() {
      if (showImportant) {
        newArr = newArr.filter((item) => item.isImportant);
      }
    }

    // if (showImportant) {
    //   newArr = allTasks.filter((item) => item.isImportant);
    // } else {
    //   newArr = allTasks.map((item) => item);
    // }

    if (filterBy) {
      newArr = allTasks.filter((item) => item.list === filterBy);
      displayImportant();
    } else {
      newArr = [...allTasks];
      displayImportant();
    }

    return newArr.map((item) => (
      <Todo
        key={item.id}
        id={item.id}
        title={item.title}
        details={item.details}
        date={item.date}
        time={item.time}
        list={item.list}
        isImportant={item.isImportant}
        handleTaskDelete={handleTaskDelete}
        handleTaskEdit={handleTaskEdit}
      />
    ));
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
                <option value="General">General</option>
                {allLists.map((list, index) => (
                  <option key={index} value={list.title}>
                    {list.title}
                  </option>
                ))}
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
          <button
            className="sort-btn"
            onClick={() => setShowImportant((prev) => !prev)}
          >
            {showImportant ? "All" : "Important"}
          </button>
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
        {displayTasks()}
      </div>
    </>
  );
}

export default Content;
