import axios from "axios";
import react from "react";
import "./style.css";

type typeLayout = {
  children: React.ReactChild;
};
const Layout = ({ children }: typeLayout) => {
  return <>{children}</>;
};
export default Layout;
