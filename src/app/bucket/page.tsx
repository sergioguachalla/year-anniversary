// app/planes/page.tsx
"use client";

import TabsSection, { TabItem } from "../components/TabsSection";
import {
  Input,
  Button,
  Checkbox,
  Select,
  SelectItem,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { useEffect, useMemo, useState } from "react";
import { useBucket, CATEGORIES, Category, Plan } from "./useBucket";

const OWNER_CODE = "bubu-dudu-2025-pon-aqui-un-codigo-largo";
const INTRO_SEEN_KEY = "bucket-intro-seen";

function CategorySelect({
  value,
  onChange,
  ariaLabel = "Categoría",
}: {
  value: Category;
  onChange: (c: Category) => void;
  ariaLabel?: string;
}) {
  return (
    <Select
      aria-label={ariaLabel}
      selectedKeys={new Set([value])}
      onSelectionChange={(k) => onChange(Array.from(k)[0] as Category)}
      className="min-w-[180px]"
    >
      {CATEGORIES.map((c) => (
        <SelectItem key={c}>
          {c === "lugares para comer" ? "lugares para comer" : c}
        </SelectItem>
      ))}
    </Select>
  );
}

function ListView({ category }: { category: Category | "todas" }) {
  const { items, loading, error, add, toggle, edit, remove } = useBucket(OWNER_CODE);

  const [text, setText] = useState("");
  const [cat, setCat] = useState<Category>(category === "todas" ? "varios" : category);

  const [editing, setEditing] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [editCat, setEditCat] = useState<Category>("varios");

  const data = useMemo(
    () => items.filter((i) => (category === "todas" ? true : i.category === category)),
    [items, category]
  );

  const todo = data.filter((i) => !i.done);
  const done = data.filter((i) => i.done);

  const submit = async () => {
    if (!text.trim()) return;
    await add(text.trim(), cat);
    setText("");
  };

  const startEdit = (p: Plan) => {
    setEditing(p.id);
    setEditText(p.text);
    setEditCat(p.category);
  };

  const saveEdit = async () => {
    if (!editing) return;
    await edit(editing, { text: editText.trim(), category: editCat });
    setEditing(null);
    setEditText("");
  };

  return (
    <div className="space-y-8">
      {/* Form de alta */}
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          value={text}
          onValueChange={setText}
          placeholder="Nuevo plan"
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="flex-1"
        />
        <CategorySelect value={cat} onChange={setCat} ariaLabel="Categoría del nuevo plan" />
        <Button className="bg-[var(--primary)] text-white" onPress={submit}>
          Agregar
        </Button>
      </div>

      {loading && <p className="opacity-70">Cargando…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* POR HACER */}
      <section className="space-y-3">
        <h3 className="font-semibold">Por hacer</h3>
        {todo.length === 0 ? (
          <p className="opacity-70">Sin pendientes</p>
        ) : (
          <ul className="space-y-2">
            {todo.map((p) => (
              <li key={p.id} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <Checkbox isSelected={p.done} onChange={() => toggle(p.id, !p.done)} />
                  {editing === p.id ? (
                    <div className="flex flex-col sm:flex-row gap-2 flex-1">
                      <Input value={editText} onValueChange={setEditText} />
                      <CategorySelect value={editCat} onChange={setEditCat} ariaLabel="Editar categoría" />
                    </div>
                  ) : (
                    <>
                      <span className="flex-1">{p.text}</span>
                      <Chip radius="full" variant="flat">
                        {p.category}
                      </Chip>
                    </>
                  )}
                </div>

                <div className="flex gap-2">
                  {editing === p.id ? (
                    <>
                      <Button size="sm" onPress={saveEdit} className="bg-[var(--primary)] text-white">
                        Guardar
                      </Button>
                      <Button size="sm" variant="light" onPress={() => setEditing(null)}>
                        Cancelar
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="sm" variant="flat" onPress={() => startEdit(p)}>
                        Editar
                      </Button>
                      <Button size="sm" variant="light" onPress={() => remove(p.id)}>
                        Eliminar
                      </Button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* HECHOS */}
      <section className="space-y-3">
        <h3 className="font-semibold">Hechos</h3>
        {done.length === 0 ? (
          <p className="opacity-70">Nada marcado aún</p>
        ) : (
          <ul className="space-y-2">
            {done.map((p) => (
              <li key={p.id} className="flex items-center gap-3">
                <Checkbox isSelected={p.done} onChange={() => toggle(p.id, !p.done)} />
                <span className="flex-1 line-through opacity-70">{p.text}</span>
                <Chip radius="full" variant="flat">
                  {p.category}
                </Chip>
                <Button size="sm" variant="light" onPress={() => remove(p.id)}>
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

const CATEGORY_TABS: (Category | "todas")[] = ["todas", ...CATEGORIES];

const ITEMS: TabItem[] = CATEGORY_TABS.map((c) => ({
  key: c,
  title: c === "todas" ? "Todas" : c,
  content: <ListView category={c} />,
}));

export default function Page() {
  // ===== MODAL DE INTRO =====
  const [introOpen, setIntroOpen] = useState(false);

  // Mostrar solo la primera vez (por navegador)
  useEffect(() => {
    try {
      const seen = typeof window !== "undefined" && localStorage.getItem(INTRO_SEEN_KEY);
      if (!seen) setIntroOpen(true);
    } catch {
      // si localStorage no está disponible, no hacemos nada
    }
  }, []);

  const closeIntro = () => {
    setIntroOpen(false);
    try {
      localStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {}
  };

  return (
    <main className="p-6 md:p-10">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h1 className="text-3xl md:text-4xl font-bold">Nuestros planes</h1>
        <Button
          variant="flat"
          onPress={() => setIntroOpen(true)}
          aria-label="¿Qué es esto?"
          className="shrink-0"
        >
          ¿Qué es esto?
        </Button>
      </div>

      <TabsSection ariaLabel="Secciones de Planes" items={ITEMS} fullWidth />

      {/* MODAL INTRO */}
      <Modal isOpen={introOpen} onOpenChange={setIntroOpen} size="lg" hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-xl font-semibold">
                Nuestro Bucket List 💘
              </ModalHeader>
              <ModalBody className="space-y-3">
                <p>
                  La idea de esta sección es tener <strong>nuestro bucket list</strong>: un
                  lugarcito para guardar cosas que queremos hacer juntos.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>🌍 <strong>Lugares</strong> a los que nos gustaría ir</li>
                  <li>🍳 <strong>Comida</strong> que queremos cocinar</li>
                  <li>🎬 <strong>Series o películas</strong> que queremos ver</li>
                  <li>✨ <strong>Varios</strong>: cualquier idea linda o pendiente</li>
                </ul>
                <p>
                  Agrega un plan con el campo de arriba, elige la categoría y marca como
                  hecho cuando lo cumplamos. Todo queda guardado para seguir sumando.
                </p>
              </ModalBody>
              <ModalFooter className="gap-2">
                <Button variant="light" onPress={() => onClose()}>
                  Luego
                </Button>
                <Button className="bg-[var(--primary)] text-white" onPress={closeIntro} autoFocus>
                  ¡Entendido!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
