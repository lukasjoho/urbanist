"use client";

import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

interface ShowcaseItemProps {
  item: {
    location: string;
    currentImage: string;
    newImage: string;
  };
}

const ShowcaseItem = ({ item }: ShowcaseItemProps) => {
  const startPercentage = 60;
  const dragX = useMotionValue(startPercentage);
  const ref = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(startPercentage);

  const handleDrag = (event: any, info: any) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const percentage = ((info.point.x - rect.left) / rect.width) * 100;
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    const newPercentage = Number(clampedPercentage.toFixed(2));
    dragX.set(newPercentage);
  };

  useEffect(() => {
    return dragX.on("change", (value) => {
      setPercentage(value);
    });
  }, []);

  return (
    <div>
      <div
        className="relative aspect-[5/4] rounded-xl overflow-hidden"
        ref={ref}
      >
        <Image
          src={"/images/harras-old.jpg"}
          alt={item.location}
          fill
          className="object-cover"
        />
        <div
          className="absolute w-full h-full left-0 top-0"
          style={{
            clipPath: `inset(0 ${100 - percentage}% 0 0)`,
          }}
        >
          <Image
            src={"/images/harras-new.jpg"}
            alt={item.location}
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={ref}
          className={`absolute cursor-pointer h-full w-2 bg-background shadow-[4px_0_12px_rgba(0,0,0,0.75)]`}
          onDrag={handleDrag}
          style={{ left: startPercentage + "%" }}
        >
          <div className="bg-background h-10 w-10 rounded-full grid place-items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <ChevronsLeftRight />
          </div>
        </motion.div>

        <div className="flex flex-col gap-2 absolute bg-background left-2 bottom-2 rounded-lg px-2 py-1">
          <span className="font-semibold text-lg">{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
