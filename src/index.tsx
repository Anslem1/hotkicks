import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
     document.getElementById("root") as HTMLElement
);



root.render(
     <BrowserRouter>
          <React.StrictMode>
               <App />
          </React.StrictMode>
     </BrowserRouter>
);
