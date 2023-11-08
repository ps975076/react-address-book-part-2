import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <h1>Menu</h1>

      <div className="sidebarContent">
        <Link to="/">Contact List</Link>
        <Link to="/add-contact">Add New Contact List</Link>
      </div>
    </div>
  );
}

export default SideBar;
