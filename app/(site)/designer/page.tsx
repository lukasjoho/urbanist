import { Button } from "@/components/ui/button";
import { SquareDashed } from "lucide-react";
import Image from "next/image";
import React from "react";

const DesignerPage = () => {
  return (
    <div className="bg-secondary grow flex">
      <div className="grow p-6">
        <div className="h-full w-full bg-background rounded-3xl p-6">
          <div className="w-full h-full relative rounded-xl overflow-hidden">
            <Image
              src={"/images/harras-old.jpg"}
              alt={"designer-image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[240px] border-l flex flex-col">
        <span>Tools</span>
        <button className="flex gap-2 items-center font-medium p-2">
          <SquareDashed />
          Region
        </button>
        <div className="mt-auto border-t flex flex-col gap-2 p-6">
          <span>Share</span>
          <Button>Publish</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>
    </div>
  );
};

export default DesignerPage;
