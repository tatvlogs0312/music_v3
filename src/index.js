import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ArtistPage from "./pages/artistPage/ArtistPage";
import AlbumsPage from "./pages/albumsPage/AlbumsPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import Navbar from "./components/navbar/Navbar";
import "./APP.css"

const AppLayout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/artist",
        element: <ArtistPage />,
      },
      {
        path: "/albums",
        element: <AlbumsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
