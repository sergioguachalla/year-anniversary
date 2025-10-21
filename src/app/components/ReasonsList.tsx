// app/components/ReasonsList.tsx
"use client";

export default function ReasonsList({ items }: { items: string[] }) {
  if (!items?.length) return <p className="opacity-70">Aún no hay razones.</p>;

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-4"> {/* antes: gap-2 */}
      {items.map((r, i) => (
        <span
          key={i}
          className="inline-flex items-center rounded-full px-5 py-2.5  
                     bg-(--secondary)/70 text-(--primary) text-m"
        >
          {r}
        </span>
      ))}
    </div>
  );
}
