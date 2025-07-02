import { Link } from "react-router-dom";
import { ROUTER_DATA } from "../../components/router/router-data";

export const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p>All Routes:</p>
      <ul className="flex flex-col gap-2">
        {ROUTER_DATA.map((route) => (
          <li key={route.path}>
            <Link to={{ pathname: route.path }}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
