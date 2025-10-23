"use client";
import Image, { ImageLoaderProps } from "next/image";

type HeroPictureProps = {
  src: string;        // ej: "/images/hero.jpg"
  alt: string;
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const ghPagesLoader = ({ src }: ImageLoaderProps) =>
  `${prefix}${src.startsWith("/") ? src : `/${src}`}`;

export default function HeroPicture({ src, alt, className }: HeroPictureProps) {
  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden rounded-lg ring-1 ring-black/5">
        <Image
          loader={ghPagesLoader}
          unoptimized
          src={src}
          alt={alt}
          width={1600}
          height={1200}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
