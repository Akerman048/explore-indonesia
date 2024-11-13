import React from "react";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Destination from "./pages/Destination/Destinations";
import Experiences from "./pages/Experiences/Experiences";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import TourDetail from "./pages/TourDetail/TourDetail";
import { destinations } from "./data/destinations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "destinations", element: <Destination /> },
      {
        path: "destinations/:id",
        element: <TourDetail />,
        loader: async ({ params }) => {
          const tour = destinations.find(
            (tour) => tour.id === Number(params.id)
          );
          return tour || null;
        },
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);
const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='app-container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
