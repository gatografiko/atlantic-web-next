"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, withLocalePath } from "@/lib/locale";

type NavItem = { path: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Inicio" },
  { path: "/apartamentos", label: "Apartamentos" },
  { path: "/amenities", label: "Amenities" },
  { path: "/ubicacion", label: "Ubicacion" },
  { path: "/proceso", label: "Proceso" },
  { path: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const homeHref = withLocalePath(locale, "/");

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <Link href={homeHref} className="brand" aria-label="Atlantic Habana">
          Atlantic Habana
        </Link>

        <nav className="nav" aria-label="Navegacion principal">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={withLocalePath(locale, item.path)}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Link href={withLocalePath(locale, "/contacto")} className="btn btn-primary">
            Solicitar info
          </Link>
        </div>
      </div>
    </header>
  );
}
