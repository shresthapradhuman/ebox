import { ReactNode } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* header */}
      <Header />
      <main className="flex-1 flex-grow">{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
