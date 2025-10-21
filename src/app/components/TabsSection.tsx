"use client";
import { Tabs, Tab } from "@heroui/react";
import { ReactNode } from "react";

export type TabItem = {
  key: string;      
  title: string;   
  content: ReactNode; 
};

export type TabsSectionProps = {
  ariaLabel: string;      
  items: TabItem[];       
  fullWidth?: boolean;    
  className?: string;     
  variant?: "solid" | "bordered" | "underlined"; 
};

export default function TabsSection({
  ariaLabel,
  items,
  fullWidth,
  className,
  variant = "underlined",
}: TabsSectionProps) {
  return (
    <div className={className}>
      <Tabs aria-label={ariaLabel} fullWidth={fullWidth} variant={variant}>
        {items.map((it) => (
          <Tab key={it.key} title={it.title}>
            <div className="py-4">{it.content}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
