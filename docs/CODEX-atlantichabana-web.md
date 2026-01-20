# CODEX — AtlanticHabana Web (V2) — Guía operativa para VSCode
> Objetivo: que el chat (Codex/VSCode) ejecute el proyecto con respuestas breves, accionables y con cambios en forma de diff.

## 0) Modo de trabajo (ahorro de tokens)
- Responde **siempre** en formato: **(1) Decisión** → **(2) Pasos** → **(3) Diff/Comandos**.
- No expliques teoría salvo que se solicite. Prioriza checklist y entregables.
- Si falta información, **asume valores razonables** y avanza (no preguntes salvo bloqueo real).
- Para cambios: entrega **diffs** (patch) o archivos completos solo si son pequeños (<200 líneas).
- Mantén outputs concisos. Evita repetir contexto.

## 1) Resumen del producto (lo que se construye)
- Web institucional “Luxury Digital Brochure + Lead Gateway”.
- **No mostrar precios** (política junta directiva).
- Mostrar **apartamentos disponibles** en 3 categorías: **De Lujo / Ejecutivos / Presidencial**.
- Sitio **mayormente estático**, con cambios menores (disponibilidad, copy, galería).
- Módulo de reservas existe pero es **externo**: solo link desde la web (no desarrollar).
- ERP/CRM futuro: **no integrar ahora**, pero **capturar leads** de forma estructurada (webhook/API listo).

## 2) Metas (prioridad)
P0:
- Rendimiento (Core Web Vitals)
- SEO internacional básico (ES/EN)
- UX premium (institucional)
- Captación de leads discreta y cualificada

P1:
- ISR para updates sin redeploy
- Panel de contenidos (CMS)
- Analítica de eventos clave

## 3) Stack recomendado (decisión)
- Frontend: **Next.js** (SSG + ISR, App Router preferente)
- Contenido: **Headless CMS** (Strapi o Directus; elegir Strapi por defecto)
- Infra: inicialmente local/dev; preparar para AWS/GCP. (CDN/WAF en fase posterior)
- DB: la del CMS (PostgreSQL en prod; SQLite en dev si se simplifica)
- Analítica: GA4 + GTM (eventos mínimos)

## 4) Arquitectura funcional (IA / páginas)
Rutas:
- `/` Home
- `/apartamentos` (landing catálogo)
- `/apartamentos/lujo`
- `/apartamentos/ejecutivos`
- `/apartamentos/presidencial`
- `/apartamentos/[slug]` (detalle)
- `/amenities`
- `/ubicacion`
- `/proceso` (compra/renta sin precios)
- `/contacto`
- `/legal/privacidad` `/legal/cookies` (mínimo)

Componentes UX:
- CTA sticky en mobile: `Solicitar info` + `WhatsApp institucional`
- Formularios cortos (<=4 campos) + pre-calificación:
  - interés: compra|renta
  - categoría: lujo|ejecutivo|presidencial
  - tipo de cliente: empresa|embajada|ejecutivo|turista premium
  - contacto: email o teléfono (uno requerido)
- No popups intrusivos. Tono institucional.

## 5) Modelo de contenido (CMS) — mínimo viable
Collection: `apartment`
- `title` (string)
- `slug` (uid)
- `category` (enum: lujo|ejecutivo|presidencial)
- `operation` (enum: venta|renta|ambos)
- `available` (boolean)
- `summary` (short text)
- `description` (rich text)
- `features` (repeatable: label/value)
- `gallery` (media array)
- `floorplan` (media optional)
- `locationNote` (text optional)
- `priority` (int)
- `updatedAt` (auto)

Collection: `siteSettings`
- `whatsappNumber`
- `contactEmail`
- `languagesEnabled` (es|en)
- `externalBookingUrl` (string)
- `brandCopy` (rich text)
- `seoDefaults` (title/desc/og)

Collection: `page`
- `slug` (home|amenities|ubicacion|proceso|contacto)
- `title`
- `content` (rich text)
- `seo` (title/desc/og)

## 6) Lead capture (datos + salida)
Estructura lead:
- `interest` (buy|rent)
- `category` (luxury|executive|presidential)
- `clientType` (company|embassy|executive|tourist_premium)
- `name` (optional)
- `email` (optional)
- `phone` (optional)
- `message` (optional)
- `sourcePage` (url)
- `utm` (object)
- `createdAt`

Salida (elige por defecto 1 y deja preparado 2):
1) Enviar email (SMTP) a contacto institucional + copia a mailbox interno
2) Webhook configurable a ERP/CRM (URL en env)

Anti-spam:
- rate limit (edge/server)
- honeypot field
- hCaptcha/recaptcha opcional (activar si hay abuso)

## 7) SEO & Performance (checklist)
- SSG/ISR para páginas y detalle de apartamentos
- Imágenes: `next/image`, formatos modernos, lazy, tamaños correctos
- Metadata: OpenGraph, Twitter cards, canonical
- Sitemap + robots
- Schema:
  - Organization
  - BreadcrumbList
  - FAQPage (si aplica)
- i18n: ES/EN con `next-intl` o built-in routing

## 8) Repo (estructura sugerida)
/
- apps/
  - web/ (Next.js)
  - cms/ (Strapi)
- packages/
  - ui/ (componentes compartidos opcional)
- infra/ (docker-compose, scripts)
- docs/ (decisiones, IA, guías)
- .env.example

## 9) Entregables por fases (hoja de ruta ejecutable)
Fase 1 (MVP Brochure + catálogo + leads):
- Setup monorepo (web + cms)
- Colecciones CMS + seed de ejemplo (3 aptos)
- Páginas base + rutas catálogo + detalle
- Form lead + endpoint `/api/lead`
- SEO básico + performance básico

Fase 2 (premium + i18n + ISR):
- Diseño final (tipografía, layout, galería)
- i18n ES/EN
- ISR interval + cache strategy
- Eventos analítica (cta_whatsapp, lead_submit, filter_used, view_apartment)

Fase 3 (operación + hardening):
- Panel editorial completo
- Legal pages + cookies
- Seguridad (headers, CSP, rate limit)
- Preparar webhook ERP/CRM

## 10) Convenciones (para el chat)
- Estilo: TypeScript, ESLint, Prettier.
- Naming:
  - categorías internas: `luxury | executive | presidential`
  - operaciones: `sale | rent | both`
- Commits (sugerencia): `feat:`, `fix:`, `chore:`, `docs:`

## 11) Comandos (defaults)
Dev:
- `pnpm i`
- `pnpm dev` (web)
- `pnpm cms` (cms)
Build:
- `pnpm build`
- `pnpm start`

## 12) Criterios de aceptación (Definition of Done)
- No hay precios en ninguna vista.
- Catálogo filtra por 3 categorías y por operación (venta/renta).
- Solo se muestran `available=true`.
- Form lead funciona y registra:
  - interest, category, clientType, contacto, sourcePage
- LCP y UX móvil correctos (sin bloqueos por media).
- SEO mínimo: titles/descriptions + sitemap + OG.
- Links a reservas externas funcionan.

## 13) Plantillas de prompts (para trabajar rápido)
- "Crea la estructura del monorepo según la sección 8 y genera los archivos base."
- "Implementa modelo `apartment` en Strapi y añade seed con 3 ejemplos."
- "Construye `/apartamentos/[slug]` con galería optimizada y CTA sticky."
- "Implementa `/api/lead` con honeypot + rate limit y envío email."
- "Añade i18n ES/EN y hreflang en todas las páginas."

---
Regla final: si una petición implica decisiones de negocio (copy legal, claims), propon 1 opción por defecto y 1 alternativa, sin extenderte.
