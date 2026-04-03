import Link from "next/link";
import { withLocalePath } from "@/lib/locale";

export default function ApartamentosPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <main className="container" style={{ padding: "32px 0" }}>
      <h1>Apartamentos</h1>
      <p className="footer-muted" style={{ marginTop: 8 }}>
        Explore las unidades disponibles por categoria. No se publican precios.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
        <Link className="btn" href={withLocalePath(locale, "/apartamentos/lujo")}>
          De Lujo
        </Link>
        <Link
          className="btn"
          href={withLocalePath(locale, "/apartamentos/ejecutivos")}
        >
          Ejecutivos
        </Link>
        <Link
          className="btn"
          href={withLocalePath(locale, "/apartamentos/presidencial")}
        >
          Presidencial
        </Link>
      </div>
    </main>
  );
}
