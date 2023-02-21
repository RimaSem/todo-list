import { useRef, useState } from "react";
import GeneralNav from "./GeneralNav";
import ListNav from "./ListNav";
import NewListForm from "./NewListForm";

type MenuProps = {
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

function Menu({ allLists, setAllLists, setAllTasks }: MenuProps) {
  const [listFormActive, setListFormActive] = useState(false);

  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const slidingMenuRef = useRef<HTMLDivElement>(null);

  function displayMenu() {
    hamburgerMenuRef.current?.classList.toggle("active");
    slidingMenuRef.current?.classList.toggle("active");
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
        <GeneralNav />
        <ListNav
          setListFormActive={setListFormActive}
          allLists={allLists}
          setAllLists={setAllLists}
          setAllTasks={setAllTasks}
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
          <GeneralNav />
          <ListNav
            setListFormActive={setListFormActive}
            allLists={allLists}
            setAllLists={setAllLists}
            setAllTasks={setAllTasks}
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
