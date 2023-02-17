import { useRef } from "react";

function Menu() {
  const menuRef = useRef<HTMLDivElement>(null);

  function displayMenu() {
    menuRef.current && menuRef.current.classList.toggle("active");
  }

  return (
    <>
      <div className="off-screen-menu"></div>
      <div className="menu">
        <div ref={menuRef} className="hamburger-menu" onClick={displayMenu}>
          <div className="ham-bar bar-top"></div>
          <div className="ham-bar bar-mid"></div>
          <div className="ham-bar bar-bottom"></div>
        </div>
      </div>
    </>
  );
}

export default Menu;
