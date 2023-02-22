import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { nanoid } from "nanoid";
import { useEffect } from "react";

type ListNavProps = {
  setListFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  allLists: { title: string | undefined; id: string }[];
  allTasks: any[];
  setAllLists: React.Dispatch<
    React.SetStateAction<
      {
        title: string | undefined;
        id: string;
      }[]
    >
  >;
  setAllTasks: React.Dispatch<React.SetStateAction<any[]>>;
  filterBy: string;
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  handleClick: (arg0: string) => void;
};

function ListNav({
  setListFormActive,
  allLists,
  allTasks,
  setAllLists,
  setAllTasks,
  filterBy,
  setFilterBy,
  selectedFilter,
  setSelectedFilter,
  handleClick,
}: ListNavProps) {
  useEffect(() => {
    setFilterBy(selectedFilter);
  }, [selectedFilter]);

  const displayLists = allLists.map((list) => (
    <div
      key={nanoid()}
      className={`list-nav-item ${selectedFilter === list.title && "active"}`}
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
    setAllLists((prev) => prev.filter((list) => list.title !== title));
    setAllTasks((prev) => prev.filter((task) => task.list !== title));
  }

  return (
    <div className="list-nav">
      <button onClick={() => setListFormActive(true)} type="button">
        Add New List
      </button>
      <div
        className={`list-nav-item ${selectedFilter === "General" && "active"}`}
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
