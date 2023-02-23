import { useContext } from "react";
import { AppContext } from "../AppContext";
import Icon from "@mdi/react";
import {
  mdiListBoxOutline,
  mdiClockTimeFourOutline,
  mdiAlertCircleOutline,
  mdiCheckboxMarkedOutline,
} from "@mdi/js";
import "./scss/GeneralNav.scss";

type GeneralNavProps = {
  handleClick: (arg0: string) => void;
};

function GeneralNav({ handleClick }: GeneralNavProps) {
  const context = useContext(AppContext);

  function createNavItem(
    icon: string,
    name: string,
    clickProp?: string,
    text?: string,
    addClass?: string
  ) {
    return (
      <div
        className={`nav-item ${addClass} ${
          context?.selectedFilter === name && "active"
        }`}
        onClick={() => handleClick(clickProp || name)}
      >
        <Icon className="nav-icon" path={icon} />
        <div className="nav-item-text">{text || name}</div>
      </div>
    );
  }

  return (
    <div className="general-nav">
      {createNavItem(mdiListBoxOutline, "", "", "All Tasks", "all-tasks")}
      {createNavItem(mdiClockTimeFourOutline, "Today")}
      {createNavItem(mdiAlertCircleOutline, "Overdue")}
      {createNavItem(mdiCheckboxMarkedOutline, "Completed")}
    </div>
  );
}

export default GeneralNav;
