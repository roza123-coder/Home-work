import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <p>header</p>
      <main>
        <Outlet />
      </main>
      <p>footer</p>
    </>
  );
};
