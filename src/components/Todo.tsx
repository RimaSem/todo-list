import { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import { TaskType } from "../types";
import { Icon } from "@mdi/react";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";
import "./scss/Todo.scss";

type TodoProps = {
  id: string;
  title: string;
  details: string;
  date: string;
  time: string;
  list: string;
  isImportant: boolean;
  isCompleted: boolean;
  handleTaskDelete: (id: string) => void;
  handleTaskEdit: (taskInfo: TaskType) => void;
};

function Todo({
  id,
  title,
  details,
  date,
  time,
  list,
  isImportant,
  isCompleted,
  handleTaskDelete,
  handleTaskEdit,
}: TodoProps) {
  const context = useContext(AppContext);
  const [showDetails, setShowDetails] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const todoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isImportant) {
      todoRef.current?.classList.add("important");
    } else {
      todoRef.current?.classList.remove("important");
    }
  }, [handleTaskEdit]);

  useEffect(() => {
    if (isCompleted) {
      todoRef.current?.classList.add("completed");
    } else {
      todoRef.current?.classList.remove("completed");
    }
  }, [isChecked]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked((prev) => !prev);
    if (e.target.checked) {
      context?.setAllTasks((prev) =>
        prev.map((task) => {
          if (task.id === id) {
            return { ...task, isCompleted: true };
          } else return task;
        })
      );
    } else {
      context?.setAllTasks((prev) =>
        prev.map((task) => {
          if (task.id === id) {
            return { ...task, isCompleted: false };
          } else return task;
        })
      );
    }
  }

  return (
    <div
      ref={todoRef}
      className="todo-container"
      onClick={() => setShowDetails((prev) => !prev)}
    >
      <div className="todo-main-row">
        <input
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
          className="todo-checkbox"
          type="checkbox"
          checked={isCompleted}
        />
        <span className="todo-title">{title}</span>
        <div className="todo-btns" onClick={(e) => e.stopPropagation()}>
          <div
            className="todo-edit"
            onClick={() =>
              handleTaskEdit({
                id,
                title,
                details,
                date,
                time,
                list,
                isImportant,
                isCompleted,
              })
            }
          >
            <Icon className="todo-edit-btn" path={mdiPencil} />
          </div>
          <div className="todo-delete" onClick={() => handleTaskDelete(id)}>
            <Icon className="todo-delete-btn" path={mdiTrashCanOutline} />
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="todo-details">
          <p>
            <span>Title:</span> {title}
          </p>
          <p>
            <span>Details:</span> {details}
          </p>
          <p>
            <span>Date:</span> {date}
          </p>
          <p>
            <span>Time:</span> {time}
          </p>
          <p>
            <span>Todo list:</span> {list}
          </p>
        </div>
      )}
    </div>
  );
}

export default Todo;
