import Navbar from "./navbar admin";

const Layout = ({ children }) => {
  return (
    <div className="root">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
