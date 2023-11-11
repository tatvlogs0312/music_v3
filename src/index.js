import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider, useParams } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ArtistPage from "./pages/artistPage/ArtistPage";
import AlbumsPage from "./pages/albumsPage/AlbumsPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import ForgotPasswordPage from "./pages/forgotpasswordPage/ForgotpasswordPage";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import ArtistInfoPage from "./pages/artistInfoPage/ArtistInfoPage";
import AlbumsInfoPage from "./pages/albumsInfoPage/AlbumsInfoPage";
import MusicPage from './pages/musicPage/MusicPage'

const AppLayout = () => (
  <div className="main">
    <Navbar />
    <div className="main-right">
      <Header/>
      <Outlet />
    </div>
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
        path: "/artist/:id",
        element: <ArtistInfoPage />,
      },
      {
        path: "/albums",
        element: <AlbumsPage />,
      },
      {
        path: "/albums/:id",
        element: <AlbumsInfoPage />,
      },
      {
        path: "/song/:id",
        element: <MusicPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
