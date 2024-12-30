import { designs } from "@/app/data/designs";
import React from "react";
import ImageSlider from "../../showcase/ImageSlider";

const DesignPage = async ({ params }: { params: { id: string } }) => {
  const design = designs.find((design) => design.id === Number(params.id));
  return (
    <div className="py-8">
      <div className="grid grid-cols-12 container">
        <div className="col-span-8">
          <h1 className="text-4xl font-bold">{design?.location}</h1>
          <ImageSlider />
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default DesignPage;
