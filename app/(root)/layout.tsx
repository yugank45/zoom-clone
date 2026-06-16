import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      

      <section className="flex-1">
        {children}
      </section>
    </main>
  );
};

export default HomeLayout;