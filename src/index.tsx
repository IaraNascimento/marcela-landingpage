import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LoadingProvider } from "./components/loading/loading_context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);

reportWebVitals();
