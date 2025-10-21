// app/components/TermsGate.tsx
"use client";

import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";


export default function TermsGate({
  storageKey = "acciones-aceptadas",
  children,
}: {
  storageKey?: string;
  children: React.ReactNode;
}) {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const v = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
    setAccepted(v === "true");
  }, [storageKey]);

  const accept = () => {
    localStorage.setItem(storageKey, "true");
    setAccepted(true);
  };

  if (accepted === null) return null;

  return (
    <>
      <div style={{ display: accepted ? "block" : "none" }}>{children}</div>

      <Modal
        isOpen={!accepted}
        onOpenChange={() => {}}
        isDismissable={false}
        hideCloseButton
        backdrop="opaque"
        placement="center"
      >
        <ModalContent>
          <>
            <ModalHeader className="text-lg font-semibold">Términos y condiciones</ModalHeader>
            <ModalBody className="space-y-2">
              <p>
                <strong>Para acceder al contenido de esta página, debes aceptar los términos y condiciones:</strong>
              </p>
              <p className="text-base">Yo novia de Dudu acepto que: Dudu ama más a bubu, por los siglos de los siglos y amén. 💙</p>
            </ModalBody>
            <ModalFooter>
              <Button
                className="bg-[var(--primary)] text-white"
                onPress={accept}
                aria-label="Aceptar términos y continuar"
              >
                Aceptar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
