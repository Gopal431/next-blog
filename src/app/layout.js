import "./globals.css";
import Navbar from "./navbar/navBar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
