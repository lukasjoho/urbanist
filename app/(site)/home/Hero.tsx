import { Input } from "@/components/ui/input";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-5xl font-bold tracking-tighter">
        Imagine tomorrow.
        <br />
        Design it today.
      </h1>
      <p className="text-lg text-muted-foreground mt-3">
        Vizualize and share new ideas <br />
        for your city, district or neighbourhood.
      </p>
      <Input
        placeholder="What are you looking for?"
        className="w-[300px] mt-4 !text-base h-12 px-4"
      />
    </div>
  );
};

export default Hero;
