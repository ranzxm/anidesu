import { Navbar } from "./Navbar";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="app bg-black">
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
