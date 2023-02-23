import { useRef, useState } from "react";
import GeneralNav from "./GeneralNav";
import ListNav from "./ListNav";
import NewListForm from "./NewListForm";

type MenuProps = {
  allLists: { title: string | undefined; id: string }[];
  allTasks: any[];
  filterBy: string;
  setAllLists: React.Dispatch<
    React.SetStateAction<
      {
        title: string | undefined;
        id: string;
      }[]
    >
  >;
  setAllTasks: React.Dispatch<React.SetStateAction<any[]>>;
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
};

function Menu({
  allLists,
  allTasks,
  filterBy,
  setAllLists,
  setAllTasks,
  setFilterBy,
  selectedFilter,
  setSelectedFilter,
}: MenuProps) {
  const [listFormActive, setListFormActive] = useState(false);

  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const slidingMenuRef = useRef<HTMLDivElement>(null);

  function displayMenu() {
    hamburgerMenuRef.current?.classList.toggle("active");
    slidingMenuRef.current?.classList.toggle("active");
  }

  function handleClick(name: string) {
    setSelectedFilter(name);
    if (screen.width <= 800) {
      displayMenu();
    }
  }

  return (
    <>
      {listFormActive && (
        <NewListForm
          allLists={allLists}
          setAllLists={setAllLists}
          setListFormActive={setListFormActive}
        />
      )}
      <div ref={slidingMenuRef} className="off-screen-menu">
        <GeneralNav
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          displayMenu={displayMenu}
          handleClick={handleClick}
        />
        <ListNav
          setListFormActive={setListFormActive}
          allLists={allLists}
          allTasks={allTasks}
          setAllLists={setAllLists}
          setAllTasks={setAllTasks}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          handleClick={handleClick}
        />
      </div>
      <div className="header">
        <div
          ref={hamburgerMenuRef}
          className="hamburger-menu"
          onClick={displayMenu}
        >
          <div className="ham-bar bar-top"></div>
          <div className="ham-bar bar-mid"></div>
          <div className="ham-bar bar-bottom"></div>
        </div>
        <div className="menu-title">Todo List</div>
        <div className="sidebar-menu">
          <GeneralNav
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            displayMenu={displayMenu}
            handleClick={handleClick}
          />
          <ListNav
            setListFormActive={setListFormActive}
            allLists={allLists}
            allTasks={allTasks}
            setAllLists={setAllLists}
            setAllTasks={setAllTasks}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            handleClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
