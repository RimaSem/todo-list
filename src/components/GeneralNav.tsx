import Icon from "@mdi/react";
import {
  mdiListBoxOutline,
  mdiClockTimeFourOutline,
  mdiAlertCircleOutline,
  mdiCheckboxMarkedOutline,
} from "@mdi/js";

type GeneralNavProps = {
  filterBy: string;
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  displayMenu: () => void;
  handleClick: (arg0: string) => void;
};

function GeneralNav({
  filterBy,
  setFilterBy,
  selectedFilter,
  setSelectedFilter,
  displayMenu,
  handleClick,
}: GeneralNavProps) {
  return (
    <div className="general-nav">
      <div
        className={`nav-item all-tasks ${selectedFilter === "" && "active"}`}
        onClick={() => handleClick("")}
      >
        <Icon className="nav-icon" path={mdiListBoxOutline} />
        <div className="nav-item-text">All Tasks</div>
      </div>
      <div
        className={`nav-item ${selectedFilter === "Today" && "active"}`}
        onClick={() => handleClick("Today")}
      >
        <Icon className="nav-icon" path={mdiClockTimeFourOutline} />
        <div className="nav-item-text">Today</div>
      </div>
      <div
        className={`nav-item ${selectedFilter === "Overdue" && "active"}`}
        onClick={() => handleClick("Overdue")}
      >
        <Icon className="nav-icon" path={mdiAlertCircleOutline} />
        <div className="nav-item-text">Overdue</div>
      </div>
      <div
        className={`nav-item ${selectedFilter === "Completed" && "active"}`}
        onClick={() => handleClick("Completed")}
      >
        <Icon className="nav-icon" path={mdiCheckboxMarkedOutline} />
        <div className="nav-item-text">Completed</div>
      </div>
    </div>
  );
}

export default GeneralNav;
