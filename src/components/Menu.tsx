import { useRef, useState } from "react";
import GeneralNav from "./GeneralNav";
import ListNav from "./ListNav";
import NewListForm from "./NewListForm";
import { nanoid } from "nanoid";

function Menu() {
  const [listFormActive, setListFormActive] = useState(false);
  const [allLists, setAllLists] = useState<
    {
      title: string | undefined;
      id: string;
    }[]
  >([
    { title: "Work", id: nanoid() },
    { title: "Shopping", id: nanoid() },
  ]);

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
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
