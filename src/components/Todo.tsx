import { useState, useRef, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";

type TodoProps = {
  id: string;
  title: string;
  details: string;
  date: string;
  time: string;
  list: string;
  isImportant: boolean;
  handleTaskDelete: (id: string) => void;
  handleTaskEdit: (taskInfo: {
    id: string;
    title: string;
    details: string;
    date: string;
    time: string;
    list: string;
    isImportant: boolean;
  }) => void;
};

function Todo({
  id,
  title,
  details,
  date,
  time,
  list,
  isImportant,
  handleTaskDelete,
  handleTaskEdit,
}: TodoProps) {
  const [showDetails, setShowDetails] = useState(false);
  const todoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isImportant) {
      todoRef.current?.classList.add("important");
    } else {
      todoRef.current?.classList.remove("important");
    }
  }, [handleTaskEdit]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      todoRef.current?.classList.add("completed");
    } else {
      todoRef.current?.classList.remove("completed");
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
