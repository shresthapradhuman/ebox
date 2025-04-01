import { ReactNode } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <Header />
      <main className="flex-1 flex-grow">{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
