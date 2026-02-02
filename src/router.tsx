import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
]);
