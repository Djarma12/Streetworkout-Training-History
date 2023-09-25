import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h1>This is App layout</h1>
      <ul>
        <li>
          <Link to="/trainings">My trainings</Link>
        </li>
        <li>
          <Link to="/trainings/new">Add new training</Link>
        </li>
        <li>
          <Link to="/exercisers">Exercisers</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AppLayout;
