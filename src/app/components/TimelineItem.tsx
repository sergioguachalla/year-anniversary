"use client";
import Image from "next/image";

export type Moment = {
  id: string;
  date: string;
  title: string;
  text: string;
  imageSrc?: string;   
  imageAlt?: string;
};

type TimelineItemProps = { moment: Moment };

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (p: string) => `${prefix}${p.startsWith("/") ? p : `/${p}`}`;

export default function TimelineItem({ moment }: TimelineItemProps) {
  const { date, title, text, imageSrc, imageAlt } = moment;

  return (
    <li className="group">
      <div className="flex gap-3">
        <div className="relative">
          <span className="block w-3 h-3 rounded-full bg-[var(--primary)] mt-2" />
          <span className="block w-px h-full bg-[var(--secondary)]/70 mx-[5px]" />
        </div>

        <article className="flex-1 rounded-xl border-0 bg-white/80 dark:bg-white/5 backdrop-blur p-4">
          <p className="text-sm opacity-70">{date}</p>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-1">{text}</p>

          {imageSrc ? (
            <div className="mt-3 overflow-hidden rounded-lg ring-1 ring-black/5">
              <Image
                unoptimized
                src={withBasePath(imageSrc)}
                alt={imageAlt ?? ""}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-auto object-cover"
              />
            </div>
          ) : null}
        </article>
      </div>
    </li>
  );
}
