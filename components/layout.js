import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="root">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
