import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div>
    {children}
    {/* TODO: Replace the contents of the `style` tag with any global styles, or remove it if it's not applicable. */}
    <style jsx global>
      {`
        body {
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }
      `}
    </style>
  </div>
);

export default Layout;
