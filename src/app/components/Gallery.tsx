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
      {/* Masonry con CSS columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {photos.map((p, i) => {
          const captionId = `photo-caption-${i}`;
          return (
            <button
              key={p.src + i}
              onClick={() => openAt(i)}
              className="group mb-4 w-full break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg"
              aria-label={`Abrir imagen: ${p.alt}`}
              aria-describedby={p.caption ? captionId : undefined}
            >
              {/* Polaroid */}
              <div
                className="
                  relative w-full overflow-hidden rounded-sm
                  bg-white shadow-[0_6px_18px_rgba(0,0,0,0.12)]
                  ring-1 ring-black/5
                  transition-transform
                  group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]
                  group-hover:rotate-[0.8deg]
                  dark:bg-neutral-50
                "
              >
                {/* Marco superior/lateral: padding. Pie: padding extra abajo */}
                <div className="p-2 pb-0">
                  <Image
                    src={withBasePath(p.src)}              // <-- AQUÍ
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full object-cover select-none"
                    draggable={false}
                  />
                </div>

                {/* Pie tipo polaroid */}
                <div className="px-3 pt-2 pb-4 text-center">
                  {(p.caption || p.date) && (
                    <figcaption
                      id={captionId}
                      className="
                        text-neutral-700 leading-tight
                        [text-wrap:balance]
                        font-hand text-base
                      "
                    >
                      {p.caption ?? ""}
                      {p.caption && p.date ? " · " : ""}
                      <span className="opacity-70">{p.date}</span>
                    </figcaption>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      <Modal isOpen={open} onOpenChange={setOpen} size="full" className="bg-black/80">
        <ModalContent>
          {(onClose) => (
            <div className="relative h-[100dvh] w-full flex items-center justify-center">
              <button
                aria-label="Anterior"
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              >
                ←
              </button>

              {current && (
                <>
                  <Image
                    src={withBasePath(current.src)}              // <-- AQUÍ
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                    className="max-h-[86dvh] w-auto h-auto rounded-lg shadow-2xl"
                    priority
                  />
                  {/* Pie dentro del lightbox */}
                  {(current.caption || current.date) && (
                    <div
                      className="
                        absolute bottom-4 left-1/2 -translate-x-1/2
                        max-w-[92vw] rounded-md
                        bg-black/40 px-4 py-2 text-white
                        backdrop-blur-sm
                        text-center text-sm md:text-base
                      "
                      role="note"
                    >
                      {current.caption}
                      {current.caption && current.date ? " · " : ""}
                      <span className="opacity-75">{current.date}</span>
                    </div>
                  )}
                </>
              )}

              <button
                aria-label="Siguiente"
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              >
                →
              </button>

              <button
                aria-label="Cerrar"
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              >
                ✕
              </button>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
