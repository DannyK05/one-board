import "./App.css";
import AuthLayout from "./components/AuthLayout";
import HomeLayout from "./components/HomeLayout";
import LoginPage from "./modules/auth/login";
import SignupPage from "./modules/auth/signup";

import { createBrowserRouter, RouterProvider } from "react-router";
import Boards from "./modules/board";
import Profile from "./modules/profile";
import Schedule from "./modules/schedule";
import Settings from "./modules/settings";

function App() {
  let router = createBrowserRouter([
    {
      Component: AuthLayout,
      children: [
        { index: true, Component: LoginPage },
        { path: "register", Component: SignupPage },
      ],
    },
    {
      path: "home",
      Component: HomeLayout,
      children: [
        { path: "boards", Component: Boards },
        { path: "profile", Component: Profile },
        { path: "schedule", Component: Schedule },
        { path: "settings", Component: Settings },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
