import React from "react";
import { Button } from "../ui/button";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="border-b h-14 flex items-center">
      <div className="container flex items-center justify-between">
        <Logo />
        <Button>Create redesign</Button>
      </div>
    </header>
  );
};

export default Header;
