import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* header */}
      <Header />
      <main className="flex-1 flex-grow">{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default layout;
