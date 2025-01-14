import { useParams, NavLink, Outlet } from "react-router-dom";
import { getCategory } from "../Data";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);

  return (
    <>
      <h1><strong>{category.name} Diploma</strong></h1>

      <ul className="session-list">
        {category?.modules.map(module => (
          <li className="session" key={module.id}>
            <NavLink 
              className={({isActive}) => isActive ? "session-active": null}
              to={module.id}>
            <p className="session-name">{module.id} | {module.name}</p>
            <p>
            </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
