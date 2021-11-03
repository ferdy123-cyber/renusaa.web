import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="root">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
