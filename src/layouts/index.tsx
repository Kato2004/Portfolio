import React, { ReactNode } from "react";
import PropTypes from "prop-types";

import "../styles/main.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="app">{children}</div>
);

Layout.prototype = {
  children: PropTypes.node,
};

export default Layout;
