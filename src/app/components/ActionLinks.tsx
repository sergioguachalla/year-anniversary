"use client";
import NextLink from "next/link";
import { Card, CardBody } from "@heroui/react";

export type ActionItem = {
  href: string;
  label: string;
};

type ActionLinksProps = {
  ariaLabel: string;      
  items: ActionItem[];     
  className?: string;
};

export default function ActionLinks({ ariaLabel, items, className }: ActionLinksProps) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul className="grid gap-2 max-w-xl">
        {items.map((it) => (
          <li key={it.href}>
            <NextLink href={it.href} className="block focus:outline-none group">
              <Card
                className="
                  border-0 bg-white/80 dark:bg-white/5 backdrop-blur
                  transition hover:shadow-md group-focus-visible:ring-2
                  group-focus-visible:ring-(--primary) hover:translate-x-0.5
                "
              >
                <CardBody className="py-4 px-5 flex items-center justify-between">
                  <span className="text-(--fg) text-xl font-bold">{it.label}</span>
                  <span
                    aria-hidden
                    className="opacity-60 transition group-hover:translate-x-0.5 text-2xl font-bold"
                  >
                    →
                  </span>
                </CardBody>
              </Card>
            </NextLink>
          </li>
        ))}

      </ul>
    </nav>
  );
}
