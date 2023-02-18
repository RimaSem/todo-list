import Icon from "@mdi/react";
import {
  mdiListBoxOutline,
  mdiClockTimeFourOutline,
  mdiAlertCircleOutline,
  mdiCheckboxMarkedOutline,
} from "@mdi/js";

function GeneralNav() {
  return (
    <div className="general-nav">
      <div className="nav-item all-tasks">
        <Icon className="nav-icon" path={mdiListBoxOutline} />
        <div className="nav-item-text">All Tasks</div>
      </div>
      <div className="nav-item">
        <Icon className="nav-icon" path={mdiClockTimeFourOutline} />
        <div className="nav-item-text">Today</div>
      </div>
      <div className="nav-item">
        <Icon className="nav-icon" path={mdiAlertCircleOutline} />
        <div className="nav-item-text">Overdue</div>
      </div>
      <div className="nav-item">
        <Icon className="nav-icon" path={mdiCheckboxMarkedOutline} />
        <div className="nav-item-text">Completed</div>
      </div>
    </div>
  );
}

export default GeneralNav;
