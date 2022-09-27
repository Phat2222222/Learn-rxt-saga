import Layout from "layouts";
import Dashboard from "pages/dashboard";
import EditStudent from "pages/edit-student";
import Profile from "pages/profile";
import Students from "pages/students";
import { Children } from "react";
import { useRoutes } from "react-router-dom";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/edit/:studentId",
          element: <EditStudent />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/add-student",
          element: <EditStudent />,
        },
      ],
    },
  ]);
}
