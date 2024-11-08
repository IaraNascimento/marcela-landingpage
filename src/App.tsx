import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App";
import Home from "./pages/home";
import Calendar from "./pages/calendar";
import NotFound from "./pages/404";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/calendar",
      element: <Calendar />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <main>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </main>
  );
}
