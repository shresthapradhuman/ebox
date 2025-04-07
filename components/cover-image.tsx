"use client";
import React from "react";
import config from "@/lib/config";
import { IKImage } from "imagekitio-next";

const CoverImage = ({ imageUrl, title }: { imageUrl: string; title: string }) => {
  return (
    <>
      <IKImage
        urlEndpoint={config.imageKit.urlEndpoint}
        path={imageUrl}
        fill
        transformation={[{ quality: 90 }, { format: "webp" }, { aspectRatio: "16:9" }]}
        alt={title}
        priority
        loading="eager"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </>
  );
};

export default CoverImage;
