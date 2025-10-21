// app/planes/usePlans.ts
"use client";
import { useEffect, useState } from "react";
import { getSb } from "../lib/supabaseClient";

export type Category =
  | "viaje"
  | "cocina"
  | "series"
  | "peliculas"
  | "lugares para comer"
  | "varios";

export const CATEGORIES: Category[] = [
  "viaje",
  "cocina",
  "series",
  "peliculas",
  "lugares para comer",
  "varios",
];

export type Plan = {
  id: string;
  text: string;
  done: boolean;
  created_at: string;
  owner_code: string;
  category: Category;
};

export function useBucket(ownerCode: string) {
  const sb = getSb();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Plan[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async () => {
    setLoading(true);
    const { data, error } = await sb
      .from("plans")
      .select("*")
      .eq("owner_code", ownerCode)
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    setItems(data ?? []);
    setLoading(false);
  };

  const add = async (text: string, category: Category) => {
    const { data, error } = await sb
      .from("plans")
      .insert([{ text, category, owner_code: ownerCode, done: false }])
      .select()
      .single();
    if (error) return setError(error.message);
    if (data) setItems((prev) => [data as Plan, ...prev]);
  };

  const toggle = async (id: string, done: boolean) => {
    const { data, error } = await sb
      .from("plans")   
      .update({ done })
      .eq("id", id)
      .eq("owner_code", ownerCode)
      .select()
      .single();
    if (error) return setError(error.message);
    if (data) setItems((prev) => prev.map((p) => (p.id === id ? (data as Plan) : p)));
  };

  const edit = async (
    id: string,
    updates: Partial<Pick<Plan, "text" | "category">>
  ) => {
    const { data, error } = await sb
      .from("plans")
      .update(updates)
      .eq("id", id)
      .eq("owner_code", ownerCode)
      .select()
      .single();
    if (error) return setError(error.message);
    if (data) setItems((prev) => prev.map((p) => (p.id === id ? (data as Plan) : p)));
  };

  const remove = async (id: string) => {
    const { error } = await sb
      .from("plans")
      .delete()
      .eq("id", id)
      .eq("owner_code", ownerCode);
    if (error) return setError(error.message);
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    fetchAll();

    // (Opcional) Realtime: descomenta si activas la publicación en Supabase
    // const ch = sb
    //   .channel("realtime:plans")
    //   .on(
    //     "postgres_changes",
    //     { event: "*", schema: "public", table: "plans", filter: `owner_code=eq.${ownerCode}` },
    //     () => fetchAll()
    //   )
    //   .subscribe();
    // return () => { sb.removeChannel(ch); };

  }, [ownerCode]);

  return { items, loading, error, add, toggle, edit, remove, refetch: fetchAll };
}
