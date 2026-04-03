import Link from "next/link";

export default function ProcesoPage() {
  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Proceso</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Informacion general sobre compra y renta. No se publican precios.
        (placeholder)
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" href="/contacto">
          Solicitar informacion
        </Link>
        <Link className="btn" href="/apartamentos">
          Ver apartamentos
        </Link>
      </div>
    </main>
  );
}
