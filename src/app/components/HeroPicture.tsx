"use client";
import Image from "next/image";

type HeroPictureProps = {
  src: string;        // ej: "/images/hero.jpg"
  alt: string;
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "jhkdfsasfjkasl";

export default function HeroPicture({ src, alt, className }: HeroPictureProps) {
  // normaliza y prefija
  const normalized = src.startsWith("/") ? src : `/${src}`;
  const resolvedSrc = `${prefix}${normalized}`;

  // (opcional) debug temporal para confirmar en prod
  if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line no-console
    console.log("HeroPicture resolvedSrc:", resolvedSrc);
  }

  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden rounded-lg ring-1 ring-black/5">
        <Image
          unoptimized
          src={resolvedSrc}
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
