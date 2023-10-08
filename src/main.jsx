import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body/Body.jsx";
import Home from "./Components/Header/Header-Button/Pages/Home.jsx";
import ProductService from "./Components/Header/Header-Button/Pages/ProductService.jsx";
import DigitalMarketing from "./Components/Header/Header-Button/Pages/DigitalMarketing.jsx";
import ContactUs from "./Components/Header/Header-Button/Pages/ContactUs.jsx";
import CloudSoftware from "./Components/Header/Header-Button/Pages/CloudSoftware.jsx";
import OurClient from "./Components/Header/Header-Button/Pages/OurClient.jsx";
import OurPartners from "./Components/Header/Header-Button/Pages/OurPartners.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/Home",
        element: <Home />,
      },

      {
        path: "/Products&Services",
        element: <ProductService />,
      },

      {
        path: "/DigitalMarketing",
        element: <DigitalMarketing />,
      },

      {
        path: "/CloudSoftware",
        element: <CloudSoftware />,
      },

      {
        path: "/OurClient",
        element: <OurClient />,
      },

      {
        path: "/OurPartners",
        element: <OurPartners />,
      },

      {
        path: "/Contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
