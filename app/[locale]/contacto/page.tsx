"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactoPage() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      interest: formData.get("interest"),
      category: formData.get("category"),
      clientType: formData.get("clientType"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      sourcePage: window.location.pathname,
      // honeypot
      company: formData.get("company"),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("request_failed");
      }

      setState("success");
      form.reset();
    } catch {
      setError(
        "No fue posible enviar la solicitud. Intente nuevamente o utilice un canal directo."
      );
      setState("error");
    }
  }

  return (
    <main className="container" style={{ padding: "32px 0", maxWidth: 720 }}>
      <h1>Contacto institucional</h1>

      <p className="footer-muted" style={{ marginTop: 8 }}>
        Canal privado para solicitudes de informacion sobre apartamentos disponibles.
        No se publican precios.
      </p>

      {state === "success" ? (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            border: "1px solid rgba(0,0,0,0.12)",
            borderRadius: 12,
          }}
        >
          <strong>Solicitud enviada.</strong>
          <p className="footer-muted" style={{ marginTop: 6 }}>
            Nuestro equipo se pondra en contacto a la brevedad.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: 24,
            display: "grid",
            gap: 14,
          }}
        >
          {/* Honeypot (oculto) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />

          <div>
            <label>
              Interes
              <select name="interest" required className="input">
                <option value="">Seleccione</option>
                <option value="buy">Compra</option>
                <option value="rent">Renta</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Categoria
              <select name="category" required className="input">
                <option value="">Seleccione</option>
                <option value="luxury">De Lujo</option>
                <option value="executive">Ejecutivos</option>
                <option value="presidential">Presidencial</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Tipo de cliente
              <select name="clientType" required className="input">
                <option value="">Seleccione</option>
                <option value="company">Empresa</option>
                <option value="embassy">Embajada</option>
                <option value="executive">Ejecutivo</option>
                <option value="tourist_premium">Turista premium</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Nombre (opcional)
              <input type="text" name="name" className="input" />
            </label>
          </div>

          <div>
            <label>
              Email (opcional)
              <input type="email" name="email" className="input" />
            </label>
          </div>

          <div>
            <label>
              Telefono (opcional)
              <input type="tel" name="phone" className="input" />
            </label>
            <div className="footer-muted" style={{ marginTop: 4 }}>
              Debe proporcionar al menos un medio de contacto.
            </div>
          </div>

          <div>
            <label>
              Mensaje (opcional)
              <textarea name="message" rows={4} className="input" />
            </label>
          </div>

          {error && (
            <div style={{ color: "darkred", fontSize: 14 }}>{error}</div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={state === "loading"}
          >
            {state === "loading" ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      )}

      <div style={{ marginTop: 24 }}>
        <p className="footer-muted">Tambien puede contactarnos por canales directos:</p>
        <div className="footer-muted" style={{ marginTop: 6 }}>
          <strong>Email:</strong> contacto@atlantichabana.com
        </div>
        <div className="footer-muted">
          <strong>WhatsApp:</strong> +53 000 0000
        </div>
      </div>
    </main>
  );
}
