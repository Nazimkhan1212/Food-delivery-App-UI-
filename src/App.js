import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./contexts/userContext";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const { loggedInUser } = useContext(userContext);
  const [userName, setUserName] = useState(loggedInUser);
  return (
    <Provider store={store}>
      <div>
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </div>
    </Provider>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
