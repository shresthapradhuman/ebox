import { ReactNode } from "react";
import Header from "./_components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <Header />
      {children}
      {/* footer */}
    </div>
  );
};

export default Layout;
