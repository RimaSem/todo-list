import { useRef, useState, useContext } from "react";
import { AppContext } from "../AppContext";
import GeneralNav from "./GeneralNav";
import ListNav from "./ListNav";
import NewListForm from "./NewListForm";
import "./scss/Menu.scss";

function Menu() {
  const context = useContext(AppContext);
  const [listFormActive, setListFormActive] = useState(false);
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const slidingMenuRef = useRef<HTMLDivElement>(null);

  function displayMenu() {
    hamburgerMenuRef.current?.classList.toggle("active");
    slidingMenuRef.current?.classList.toggle("active");
  }

  function handleClick(name: string) {
    context?.setSelectedFilter(name);
    if (screen.width <= 800) {
      displayMenu();
    }
  }

  return (
    <>
      {listFormActive && <NewListForm setListFormActive={setListFormActive} />}
      <div ref={slidingMenuRef} className="off-screen-menu">
        <GeneralNav handleClick={handleClick} />
        <ListNav
          setListFormActive={setListFormActive}
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
          <GeneralNav handleClick={handleClick} />
          <ListNav
            setListFormActive={setListFormActive}
            handleClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
