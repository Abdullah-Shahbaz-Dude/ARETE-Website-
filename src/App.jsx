import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Home,
  Error,
  Why,
  What,
  Individuals,
  Organizations,
  Contact,
  Landing,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      {
        path: "solutions/individuals",
        element: <Individuals />,
      },
      {
        path: "solutions/organizations",
        element: <Organizations />,
      },
      {
        path: "why",
        element: <Why />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "What-We-Do",
        element: <What />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
