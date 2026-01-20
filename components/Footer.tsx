"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, withLocalePath } from "@/lib/locale";

type NavItem = { path: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { path: "/apartamentos", label: "Apartamentos" },
  { path: "/amenities", label: "Amenities" },
  { path: "/ubicacion", label: "Ubicacion" },
  { path: "/proceso", label: "Proceso" },
  { path: "/contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="footer-brand">Atlantic Habana</div>
          <div className="footer-muted">
            Residencias de alto estandar en La Habana.
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-title">Enlaces</div>
          <div className="footer-links">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={withLocalePath(locale, item.path)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-title">Legal</div>
          <div className="footer-links">
            <Link href="/legal/privacidad">Privacidad</Link>
            <Link href="/legal/cookies">Cookies</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-muted">
          (c) {year} Atlantic Habana. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
