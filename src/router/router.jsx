import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import ChefTeam from "../pages/chef-page/ChefTeam";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <>hello</>,
      },
      {
        path: "chef-page/team",
        element: <ChefTeam />,
      },
    ],
  },
]);
