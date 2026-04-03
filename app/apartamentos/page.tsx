import Link from "next/link";

export default function ApartamentosPage() {
  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Apartamentos</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Explore las unidades disponibles por categoria. No se publican precios.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
        <Link className="btn" href="/apartamentos/lujo">
          De Lujo
        </Link>
        <Link className="btn" href="/apartamentos/ejecutivos">
          Ejecutivos
        </Link>
        <Link className="btn" href="/apartamentos/presidencial">
          Presidencial
        </Link>
      </div>
    </main>
  );
}
