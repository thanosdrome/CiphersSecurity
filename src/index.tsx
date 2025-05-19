import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./LandingPage";
import { Blog } from "./Blog/Blog";
import {Courses} from "./Courses/Courses";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <LandingPage />,
    },
    {
      path: "/courses",
      element: <Courses/>,
    },
    {
      path: "/blog",
      element: <Blog />,
    }]
  }
])

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
);
