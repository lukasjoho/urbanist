import React from "react";
import { Button } from "../ui/button";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="border-b h-14 flex items-center justify-between container">
      <Logo />
      <Button>Create redesign</Button>
    </header>
  );
};

export default Header;
