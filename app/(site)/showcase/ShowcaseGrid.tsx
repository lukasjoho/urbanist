import { designs } from "@/app/data/designs";
import React from "react";
import ShowcaseItem from "./ShowcaseItem";

const ShowcaseGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8 container">
      {designs.map((design) => {
        return <ShowcaseItem item={design} />;
      })}
    </div>
  );
};

export default ShowcaseGrid;
