import { Navbar, Footer } from "@/components/global";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
