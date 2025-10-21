"use client";
import Image from "next/image";

type HeroPictureProps = {
  src: string;        // ruta en /public, ej: "/images/hero.jpg"
  alt: string;        // texto alternativo accesible
  className?: string;
};

export default function HeroPicture({ src, alt, className }: HeroPictureProps) {
  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden rounded-lg ring-1 ring-black/5">
        <Image
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
