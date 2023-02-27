import Page404 from "../page404";
import Home from "../home";
import ManagerStudent from "../student";
import { useState, useEffect } from "react";

const Container = ({ pathname }) => {
  const [component, setComponent] = useState(null);
  const setPathName = () => {
    switch (pathname) {
      case "/welcome":
        setComponent(<Home />);
        break;
      case "/home":
        setComponent(<Home />);
        break;
      case "/admin/student":
        setComponent(<ManagerStudent />);
        break;
      default:
        setComponent(<Page404 />);
        break;
    }
  };
  useEffect(() => {
    setPathName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return component;
};
export default Container;
