import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Route } from "react-router-dom";
import Github from "./components/Github/Github.jsx";
import githubInfoLoader from "./components/Github/Githubinfoloader.js";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" loader={githubInfoLoader} element={<Github />} />
      </Route>
    </>
  )
);

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       // {
//       //   path: "github",
//       //   element: <Github />,
//       // },
//     ],
//   },
// ]);

export default routes;
