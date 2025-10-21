// app/components/LoveLetter.tsx
"use client";

import { Card, CardBody } from "@heroui/react";
import { ReactNode } from "react";

export type LoveLetterProps = {
  title: string;
  children: ReactNode;
  signature?: string;
};

export default function LoveLetter({ title, children, signature }: LoveLetterProps) {
  return (
    <Card className="border-0 bg-white/80 dark:bg-white/5 backdrop-blur">
      <CardBody>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-3 leading-relaxed">{children}</div>
        {signature ? <p className="mt-4 opacity-80">— {signature}</p> : null}
      </CardBody>
    </Card>
  );
}
