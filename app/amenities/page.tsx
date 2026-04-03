import Link from "next/link";

export default function AmenitiesPage() {
  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Amenities</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Servicios y facilidades del inmueble (placeholder).
      </p>

      <div style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" href="/contacto">
          Solicitar informacion
        </Link>
      </div>
    </main>
  );
}
