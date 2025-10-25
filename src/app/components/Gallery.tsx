"use client";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Modal, ModalContent } from "@heroui/react";
import { withBasePath } from "../helpers/basePath";
export type Photo = {
  src: string;        // /public/images/...
  alt: string;        // texto accesible
  width: number;      // píxeles reales aprox (ej: 1200)
  height: number;     // píxeles reales aprox (ej: 1600)
  caption?: string;   // ej: "Nuestra primera foto"
  date?: string;      // ej: "12/08/2022" (opcional)
};

export type GalleryProps = {
  photos: Photo[];
  emptyHint?: string;
};

export default function Gallery({ photos, emptyHint = "Aún no hay fotos. 💙" }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const hasPhotos = photos.length > 0;
  const current = useMemo(() => photos[idx], [photos, idx]);

  const openAt = useCallback((i: number) => {
    setIdx(i);
    setOpen(true);
  }, []);

  const onPrev = useCallback(
    () => setIdx((i) => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );

  const onNext = useCallback(
    () => setIdx((i) => (i + 1) % photos.length),
    [photos.length]
  );

  // Navegación con teclado en el lightbox
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onPrev, onNext]);

  if (!hasPhotos) return <p className="opacity-70">{emptyHint}</p>;

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {photos.map((p, i) => (
          <button
            key={p.src + i}
            onClick={() => openAt(i)}
            className="group mb-4 w-full break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg"
            aria-label={`Abrir imagen: ${p.alt}`}
          >
            <div className="relative overflow-hidden rounded-lg ring-1 ring-black/5 transition group-hover:translate-y-[-1px] group-hover:shadow-md">
              <Image
                src={withBasePath(p.src)}              // <-- AQUÍ
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>

      <Modal isOpen={open} onOpenChange={setOpen} size="full" className="bg-black/80">
        <ModalContent>
          {(onClose) => (
            <div className="relative h-[100dvh] w-full flex items-center justify-center">
              {/* ... */}
              {current && (
                <Image
                  src={withBasePath(current.src)}       // <-- Y AQUÍ TAMBIÉN
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  className="max-h-[90dvh] w-auto h-auto rounded-lg shadow-2xl"
                  priority
                />
              )}
              {/* ... */}
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}