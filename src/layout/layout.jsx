// Layout.jsx
import React from "react";
import GuestLayout from "./GuestLayout";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <GuestLayout>
      {children}
      <Footer />
    </GuestLayout>
  );
};

export default Layout;
