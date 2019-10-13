import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div data-test="content">{children}</div>
);

export default Layout;
