import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import { SignUp } from "./features";

export const ROUTES = {
  HOME: "/",
  SIGN_UP: "/sign-up",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
  },
  {
    path: ROUTES.SIGN_UP,
    element: <SignUp.component />,
    children: SignUp.routes,
  },
]);
