import Header from "@/components/shared/Header";
import React from "react";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grow flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default SiteLayout;
