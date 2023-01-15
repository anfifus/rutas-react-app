import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import A from "./pages/a/A";
import B from "./pages/b/B";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import AppLayout from "./layout/app/AppLayout";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/a",
    element: <A />,
  },
  {
    path: "/b",
    element: <B />,
  },
]); */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/a" element={<A />}></Route>
      <Route path="/b" element={<B />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
