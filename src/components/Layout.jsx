import { Navbar } from "./Navbar";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="app">
        <nav>
          <Navbar />
        </nav>
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
