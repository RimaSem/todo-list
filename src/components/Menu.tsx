import { useRef } from "react";
import GeneralNav from "./GeneralNav";
import ListNav from "./ListNav";

function Menu() {
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const slidingMenuRef = useRef<HTMLDivElement>(null);

  function displayMenu() {
    hamburgerMenuRef.current &&
      hamburgerMenuRef.current.classList.toggle("active");
    slidingMenuRef.current && slidingMenuRef.current.classList.toggle("active");
  }

  return (
    <>
      <div ref={slidingMenuRef} className="off-screen-menu">
        <GeneralNav />
        <ListNav />
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
          <ListNav />
        </div>
      </div>
    </>
  );
}

export default Menu;
