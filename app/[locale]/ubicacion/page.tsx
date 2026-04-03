import Link from "next/link";
import { withLocalePath } from "@/lib/locale";

export default async function UbicacionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Ubicacion</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Descripcion de la zona y puntos de interes (placeholder). Se anadira mapa.
      </p>

      <div style={{ marginTop: 20 }}>
        <Link className="btn" href={withLocalePath(locale, "/apartamentos")}>
          Ver apartamentos
        </Link>
      </div>
    </main>
  );
}
