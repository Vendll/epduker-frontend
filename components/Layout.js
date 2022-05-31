import Navbar from "./navigation/Navbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children, categories }) => {
  return (
    <>
      <Navbar categories={categories} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
