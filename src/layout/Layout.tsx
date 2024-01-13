import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
