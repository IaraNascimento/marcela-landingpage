import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/404";
import Calendar from "../pages/calendar";
import Home from "../pages/home";

export const routes = [
  {
    path: "",
    name: "home.name",
    element: <Home />,
  },
  {
    path: "calendar",
    name: "calendar.name",
    element: <Calendar />,
  },
  {
    path: "*",
    name: "notfound.name",
    element: <NotFound />,
  },
];

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
