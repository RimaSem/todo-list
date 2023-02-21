import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { nanoid } from "nanoid";

type ListNavProps = {
  setListFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  allLists: { title: string | undefined; id: string }[];
  setAllLists: React.Dispatch<
    React.SetStateAction<
      {
        title: string | undefined;
        id: string;
      }[]
    >
  >;
  setAllTasks: React.Dispatch<React.SetStateAction<any[]>>;
};

function ListNav({
  setListFormActive,
  allLists,
  setAllLists,
  setAllTasks,
}: ListNavProps) {
  const displayLists = allLists.map((list) => (
    <div key={nanoid()} className="list-nav-item">
      <div className="list-nav-item-text">{list.title}</div>
      <div
        id={list.id}
        className="delete-list-icon"
        onClick={() => handleDelete(list.id)}
      >
        <Icon path={mdiTrashCanOutline} />
      </div>
    </div>
  ));

  function handleDelete(id: string) {
    setAllLists((prev) => prev.filter((list) => list.id !== id));
    let listTitles: (string | undefined)[] = [];
    allLists.forEach((list) => listTitles.push(list.title));
    setAllTasks((prev) =>
      prev.filter((task) => !listTitles.includes(task.list))
    );
  }

  return (
    <div className="list-nav">
      <button onClick={() => setListFormActive(true)} type="button">
        Add New List
      </button>
      <div className="list-nav-item">
        <div className="list-nav-item-text">General</div>
      </div>
      {displayLists}
    </div>
  );
}

export default ListNav;
