import { Link } from "react-router-dom";

function ListItem({ person }) {
  return (
    <div className="listItem">
      <p>
        {person.firstName} {person.lastName}
      </p>
      <Link to={"/view/" + person.id}>View</Link>
    </div>
  );
}
export default ListItem;
