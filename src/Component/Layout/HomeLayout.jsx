import { Outlet } from "react-router-dom";
import { Navbar } from "../Common";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
