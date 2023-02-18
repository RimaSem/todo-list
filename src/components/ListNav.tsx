import Icon from "@mdi/react";
import { mdiPlay, mdiTrashCanOutline } from "@mdi/js";

function ListNav() {
  return (
    <div className="list-nav">
      <button type="button">Add New List</button>
      <div className="list-nav-item">
        <div className="list-nav-item-text">General</div>
      </div>
      <div className="list-nav-item">
        <div className="list-nav-item-text">Work</div>
        <Icon className="delete-list-icon" path={mdiTrashCanOutline} />
      </div>
      <div className="list-nav-item">
        <div className="list-nav-item-text">Shopping</div>
        <Icon className="delete-list-icon" path={mdiTrashCanOutline} />
      </div>
    </div>
  );
}

export default ListNav;
