import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
interface Props {
  children: ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main> {children}</main>
    </>
  );
};
export default Layout;
