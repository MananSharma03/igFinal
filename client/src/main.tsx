import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a root and render the app
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Enable HMR for local development
if (import.meta.hot) {
  import.meta.hot.accept();
}
