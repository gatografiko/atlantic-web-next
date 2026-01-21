"use client";

import { useId, useState } from "react";
import type { ApartmentOperation } from "@/lib/apartments";

const DEFAULT_PHONE = "+5358344465";

function toDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

type OperationActionsProps = {
  operation: ApartmentOperation;
  phone?: string;
};

export function OperationActions({ operation, phone = DEFAULT_PHONE }: OperationActionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const digits = toDigits(phone);
  const label = operation === "rent" ? "Rentar" : "Comprar";

  return (
    <div className="action-panel">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {label}
      </button>

      {isOpen && (
        <div id={panelId} className="action-sheet">
          <div className="action-group">
            <div className="action-title">Enviar mensajes</div>
            <div className="action-buttons">
              <a className="btn" href={`sms:${phone}`}>
                SMS
              </a>
              <a className="btn" href={`https://wa.me/${digits}`}>
                WhatsApp
              </a>
              <a className="btn" href={`tg://resolve?phone=${digits}`}>
                Telegram
              </a>
            </div>
          </div>

          <div className="action-group">
            <div className="action-title">Llamadas</div>
            <div className="action-buttons">
              <a className="btn" href={`tel:${phone}`}>
                Llamada
              </a>
              <a className="btn" href={`whatsapp://call?phone=${digits}`}>
                WhatsApp
              </a>
              <a className="btn" href={`tg://resolve?phone=${digits}&call=1`}>
                Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
