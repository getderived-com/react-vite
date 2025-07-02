import { HashRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../pages/not-found/not-found.page";
import { ProtectedRoute } from "./protected-route";
import { ROUTER_DATA } from "./router-data";

export const MainRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {ROUTER_DATA.map((route) => {
            const Comp = route.component;
            return (
              <Route key={route.path} path={route.path} element={<Comp />} />
            );
          })}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};
