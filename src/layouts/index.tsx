import React, { ReactNode } from "react";
import PropTypes from "prop-types";

import "../styles/main.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="app">
    <div className="container">{children}</div>
  </div>
);

Layout.prototype = {
  children: PropTypes.node,
};

export default Layout;
