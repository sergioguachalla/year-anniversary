"use client";
import TimelineItem, { Moment } from "./TimelineItem";

export type TimelineListProps = {
  moments: Moment[];            
  order?: "asc" | "desc";      
  emptyHint?: string;           
};

export default function TimelineList({
  moments,
  order = "asc",
  emptyHint = "No items found.",
}: TimelineListProps) {
  const list = [...moments];
  if (order === "desc") list.reverse();

  if (list.length === 0) {
    return <p className="opacity-70">{emptyHint}</p>;
  }

  return (
    <ul className="space-y-4">
      {list.map((m) => (
        <TimelineItem key={m.id} moment={m} />
      ))}
    </ul>
  );
}
