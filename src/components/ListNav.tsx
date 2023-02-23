import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { nanoid } from "nanoid";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import "./scss/ListNav.scss";

type ListNavProps = {
  setListFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (arg0: string) => void;
};

function ListNav({ setListFormActive, handleClick }: ListNavProps) {
  const context = useContext(AppContext);

  useEffect(() => {
    context?.setFilterBy(context?.selectedFilter);
  }, [context?.selectedFilter]);

  const displayLists = context?.allLists.map((list) => (
    <div
      key={nanoid()}
      className={`list-nav-item ${
        context?.selectedFilter === list.title && "active"
      }`}
      id={list.title}
      onClick={() => handleClick(list.title ? list.title : "")}
    >
      <div className="list-nav-item-text">{list.title}</div>
      <div
        className="delete-list-icon"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(list.title);
        }}
      >
        <Icon path={mdiTrashCanOutline} />
      </div>
    </div>
  ));

  function handleDelete(title: string | undefined) {
    context?.setAllLists((prev) => prev.filter((list) => list.title !== title));
    context?.setAllTasks((prev) => prev.filter((task) => task.list !== title));
  }

  return (
    <div className="list-nav">
      <button onClick={() => setListFormActive(true)} type="button">
        Add New List
      </button>
      <div
        className={`list-nav-item ${
          context?.selectedFilter === "General" && "active"
        }`}
        id="General"
        onClick={() => handleClick("General")}
      >
        <div className="list-nav-item-text">General</div>
      </div>
      {displayLists}
    </div>
  );
}

export default ListNav;
