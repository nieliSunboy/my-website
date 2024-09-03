// components/Layout.tsx
import React from "react";
import Header from "./header";
import "./index.css";
import "./svg.css";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
