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
};

function GeneralNav({ filterBy, setFilterBy }: GeneralNavProps) {
  return (
    <div className="general-nav">
      <div className="nav-item all-tasks" onClick={() => setFilterBy("")}>
        <Icon className="nav-icon" path={mdiListBoxOutline} />
        <div className="nav-item-text">All Tasks</div>
      </div>
      <div className="nav-item" onClick={() => setFilterBy("Today")}>
        <Icon className="nav-icon" path={mdiClockTimeFourOutline} />
        <div className="nav-item-text">Today</div>
      </div>
      <div className="nav-item" onClick={() => setFilterBy("Overdue")}>
        <Icon className="nav-icon" path={mdiAlertCircleOutline} />
        <div className="nav-item-text">Overdue</div>
      </div>
      <div className="nav-item" onClick={() => setFilterBy("Completed")}>
        <Icon className="nav-icon" path={mdiCheckboxMarkedOutline} />
        <div className="nav-item-text">Completed</div>
      </div>
    </div>
  );
}

export default GeneralNav;
