import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TwitchComputer } from "./pages/TwitchComputer/TwitchComputer.tsx";
import { Embed } from "./pages/Embed/Embed.tsx";
import { Overlay } from "./pages/Overlay/Overlay.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:channel",
    element: <TwitchComputer />,
  },
  {
    path: "/embed/:channel",
    element: <Embed />,
  },
  {
    path: "/overlay",
    element: <Overlay />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
