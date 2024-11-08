import "./App.scss";
import { BrowserRouter, createBrowserRouter, Outlet } from "react-router-dom";
import { useLoading } from "./components/loading/loading_context";
import Loading from "./components/loading/loading";
import Home from "./pages/home";
import Calendar from "./pages/calendar";
import NotFound from "./pages/404";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import AppRoutes from "./routes/routes";

export default function App() {
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <header>
              <Header />
            </header>

            <main>
              <AppRoutes />
            </main>

            <footer>
              <Footer />
            </footer>
          </>
        )}
      </>
    </BrowserRouter>
  );
}
