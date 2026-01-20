import Link from "next/link";
import { withLocalePath } from "@/lib/locale";

export default function EjecutivosPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Ejecutivos</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Unidades orientadas a estancias corporativas, embajadas y ejecutivos de
        empresas.
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" href={withLocalePath(locale, "/apartamentos")}>
          Volver a categorias
        </Link>
        <Link className="btn btn-primary" href={withLocalePath(locale, "/contacto")}>
          Consultar disponibilidad
        </Link>
      </div>
    </main>
  );
}
