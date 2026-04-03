import Link from "next/link";

export default function UbicacionPage() {
  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Ubicacion</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Descripcion de la zona y puntos de interes (placeholder). Se anadira mapa.
      </p>

      <div style={{ marginTop: 20 }}>
        <Link className="btn" href="/apartamentos">
          Ver apartamentos
        </Link>
      </div>
    </main>
  );
}
