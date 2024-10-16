import { Outlet, RouteObject } from "react-router-dom";
import { BoxWrapper } from "../../ui/atoms";
import { SIGN_UP_ROUTES } from "./routing.ts";
import Register from "./screens/Register.tsx";
import Success from "./screens/Success.tsx";

export const Wrapper = () => (
  <BoxWrapper className="max-w-[300px] m-auto mt-[100px]">
    <Outlet />
  </BoxWrapper>
);

export default [
  {
    path: SIGN_UP_ROUTES.SIGN_UP,
    element: <Register />,
  },
  {
    path: SIGN_UP_ROUTES.SIGN_UP_SUCCESS,
    element: <Success />,
  },
] as RouteObject[];
