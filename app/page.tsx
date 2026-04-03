import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">El Vedado · La Habana · Cuba</p>
          <h1 className="hero-title">
            Redefiniendo el concepto de exclusividad
          </h1>
          <p className="hero-subtitle">
            Torre Atlantic ofrece apartamentos de alto estandar con vistas
            panoramicas al Malecon y el Mar Caribe, en el corazon de El Vedado.
          </p>
          <div className="hero-actions">
            <Link href="/apartamentos" className="btn btn-primary">
              Ver apartamentos
            </Link>
            <Link href="/contacto" className="btn btn-outline-light">
              Solicitar informacion
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre la Torre */}
      <section className="home-section">
        <div className="container">
          <p className="section-eyebrow">La Torre</p>
          <h2 className="section-title">
            Un simbolo de la arquitectura moderna en La Habana
          </h2>
          <p className="section-lead">
            Torre Atlantic es un edificio residencial de 25 plantas ubicado en
            la Calle D entre 1ra y 3ra, en El Vedado. Con 96 unidades
            distribuidas desde el piso 8, cada apartamento fue disenado para
            ofrecer el maximo confort, privacidad y vistas incomparables.
            Desarrollado por Azul Inmobiliaria —empresa mixta cubano-italiana—
            e inaugurado en 2007, es hoy una referencia de lujo residencial en
            La Habana.
          </p>

          <div className="stats-grid" style={{ marginTop: 48 }}>
            <div>
              <div className="stat-number">25</div>
              <div className="stat-label">Plantas</div>
            </div>
            <div>
              <div className="stat-number">96</div>
              <div className="stat-label">Unidades exclusivas</div>
            </div>
            <div>
              <div className="stat-number">2007</div>
              <div className="stat-label">Ano de inauguracion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="home-section-alt">
        <div className="container">
          <p className="section-eyebrow">Nuestras unidades</p>
          <h2 className="section-title">Espacios para cada perfil</h2>
          <p className="section-lead">
            Disponibles para compra y renta. No publicamos precios — cada
            solicitud es atendida de forma privada y personalizada.
          </p>

          <div className="category-grid">
            <div className="category-card">
              <span className="category-card-label">Categoria</span>
              <h3 className="category-card-title">De Lujo</h3>
              <p className="category-card-desc">
                Alto estandar para clientes que exigen privacidad, elegancia
                y ubicacion estrategica con vistas al mar.
              </p>
              <div style={{ marginTop: 8 }}>
                <Link href="/apartamentos/lujo" className="btn">
                  Explorar
                </Link>
              </div>
            </div>

            <div className="category-card">
              <span className="category-card-label">Categoria</span>
              <h3 className="category-card-title">Ejecutivos</h3>
              <p className="category-card-desc">
                Orientados a estancias corporativas, embajadas y ejecutivos
                que requieren funcionalidad y confort institucional.
              </p>
              <div style={{ marginTop: 8 }}>
                <Link href="/apartamentos/ejecutivos" className="btn">
                  Explorar
                </Link>
              </div>
            </div>

            <div className="category-card">
              <span className="category-card-label">Categoria</span>
              <h3 className="category-card-title">Presidencial</h3>
              <p className="category-card-desc">
                Maxima exclusividad con espacios pensados para protocolos de
                alto nivel, recepciones privadas y discrecion absoluta.
              </p>
              <div style={{ marginTop: 8 }}>
                <Link href="/apartamentos/presidencial" className="btn">
                  Explorar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="home-section">
        <div className="container">
          <p className="section-eyebrow">Servicios</p>
          <h2 className="section-title">Todo lo que necesitas, en un solo lugar</h2>

          <div className="amenity-grid">
            <div className="amenity-item">
              <span className="amenity-icon">
                {/* Waves */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/></svg>
              </span>
              <div>
                <div className="amenity-name">Piscina en terraza</div>
                <div className="amenity-desc">Terraza con piscina en el piso 6 con vistas al entorno urbano.</div>
              </div>
            </div>

            <div className="amenity-item">
              <span className="amenity-icon">
                {/* Shield */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <div>
                <div className="amenity-name">Seguridad 24 horas</div>
                <div className="amenity-desc">Recepcion, vigilancia y sistemas de videovigilancia permanentes.</div>
              </div>
            </div>

            <div className="amenity-item">
              <span className="amenity-icon">
                {/* Car */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17H5v-3l2-6h10l2 6v3z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg>
              </span>
              <div>
                <div className="amenity-name">Estacionamiento</div>
                <div className="amenity-desc">5 plantas dedicadas exclusivamente a parqueo privado.</div>
              </div>
            </div>

            <div className="amenity-item">
              <span className="amenity-icon">
                {/* Eye / panoramic */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <div>
                <div className="amenity-name">Vistas panoramicas</div>
                <div className="amenity-desc">Vistas al Malecon habanero y al Mar Caribe desde las unidades superiores.</div>
              </div>
            </div>

            <div className="amenity-item">
              <span className="amenity-icon">
                {/* Shopping bag */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </span>
              <div>
                <div className="amenity-name">Servicios en edificio</div>
                <div className="amenity-desc">Mercado, panaderia y tiendas de articulos del hogar en planta baja.</div>
              </div>
            </div>

            <div className="amenity-item">
              <span className="amenity-icon">
                {/* Zap / electricity */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </span>
              <div>
                <div className="amenity-name">Planta electrica</div>
                <div className="amenity-desc">Generador de respaldo para garantizar continuidad de todos los servicios.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicacion */}
      <section className="home-section-alt">
        <div className="container">
          <p className="section-eyebrow">Ubicacion</p>
          <h2 className="section-title">El Vedado, La Habana</h2>
          <p className="section-lead">
            Situada en la Calle D entre 1ra y 3ra, Torre Atlantic se encuentra
            en uno de los barrios mas emblematicos de La Habana. A pasos del
            Malecon, con acceso directo a los principales centros diplomaticos,
            corporativos y culturales de la ciudad.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link href="/ubicacion" className="btn">
              Ver ubicacion detallada
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">
            Reserva tu espacio en Torre Atlantic
          </h2>
          <p className="cta-subtitle">
            Canal privado para solicitudes de informacion. Nuestro equipo
            responde a la brevedad con total discrecion.
          </p>
          <div className="hero-actions">
            <Link href="/contacto" className="btn btn-primary">
              Solicitar informacion
            </Link>
            <Link href="/apartamentos" className="btn btn-outline-light">
              Ver catalogo completo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
