# Turno Web — Especificación de contenido y diseño

Landing informativa B2B para presentar Turno a dueños/as de peluquería, y
sirve como página informativa de la empresa para el proceso de validación
de negocio de Meta.

## Modelo de producto (importante)

Turno **no es un bot por peluquería**. Es un único número de WhatsApp,
compartido por toda la red de peluquerías: el cliente le escribe a Turno
(no al número propio de una peluquería), y puede:

- pedir una peluquería puntual por nombre, o
- pedir "algo cerca" y dejar que Turno le ofrezca opciones por cercanía.

Turno agenda el turno en la peluquería elegida y le avisa al dueño/a por su
WhatsApp normal. Ninguna peluquería gestiona número, bot ni app propia —
solo recibe reservas ya hechas. Este punto condiciona todo el copy: nunca
describir a Turno como "tu WhatsApp" o "tu número de siempre" de la
peluquería.

## Objetivo y audiencia

- **Audiencia primaria:** dueños/as de peluquería evaluando si sumar el
  servicio.
- **Objetivo de la página:** explicar qué es Turno, cómo funciona, y generar
  contacto (no hay checkout ni pricing público en esta primera versión).
- **Sin precios:** la sección de contacto deriva a email; no hay planes.

## Sistema de diseño

### Paleta (dark, salón/latón — no el típico "casi negro + acento neón")

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#12100E` | Fondo base, charcoal cálido |
| `--bg-elevated` | `#1B1815` | Tarjetas, header |
| `--ink` | `#F3EEE6` | Texto principal |
| `--ink-muted` | `#A79C8C` | Texto secundario |
| `--brass` | `#C9A15D` | Acento primario (marca) |
| `--emerald` | `#4F7D6C` | Acento secundario (agenda/confirmación, guiño sutil a WhatsApp sin ser literal) |
| `--line` | `#2C2823` | Divisores |

### Tipografía

- **Display:** Fraunces (serif con carácter, usado en títulos grandes) — le
  da un aire de boutique/salón en vez del sans-serif genérico de SaaS.
- **Body:** Inter — limpia, legible, neutra.
- **Utility/mono:** IBM Plex Mono — eyebrows, timestamps y números de paso
  (01/02/03/04), para dar sensación de "etiqueta de sistema".

### Elemento firma

El **chat de WhatsApp animado** (mockup, no capturas reales) que se
autoescribe con indicador de "escribiendo…" es el hilo visual de toda la
página: aparece en el hero (agendando un turno) y se repite a mitad de
página (recordatorio automático). No son capturas reales — están rotuladas
como conversación de ejemplo.

### Layout

- Hero asimétrico: copy + CTA a la izquierda, teléfono con chat animado a
  la derecha.
- "Cómo funciona" usa numeración 01–04 porque **es una secuencia real**
  (cliente escribe → Turno agenda → avisa al dueño/a → recuerda solo).
- El resto de las secciones usa grillas de tarjetas, sin numeración
  artificial.

## Estructura de secciones (orden actual)

1. **Header sticky** — logo + nav (Cómo funciona / Beneficios / Preguntas) + CTA.
2. **Hero** — titular, subcopy, dos CTAs (contacto / ver cómo funciona), chat animado.
3. **El problema** — 3 dolores concretos de la peluquería (agenda en la
   cabeza, mensajes sin responder, clientes que se olvidan).
4. **Cómo funciona** — 4 pasos numerados.
5. **Demo 2** — segundo chat animado mostrando el recordatorio 2hs antes.
6. **Beneficios** — grilla de 6 features (agenda automática, recordatorios,
   alta conversacional, descubrimiento por cercanía, agenda exportable .ics,
   sin número/app propia que gestionar).
7. **FAQ** — 6 preguntas típicas de un dueño/a de peluquería evaluando el
   servicio (número/bot propio, cómo lo encuentran clientes nuevos, apps
   para el cliente, cambiar horarios, turnos pisados, atención personal).
8. **CTA final / Contacto** — mailto a `hola@turno.app` (placeholder —
   reemplazar por el email real del negocio).
9. **Footer** — logo + tagline.

## Contenido pendiente de reemplazar antes de publicar

- [ ] Email de contacto real (hoy `hola@turno.app` es placeholder).
- [ ] Confirmar/ajustar nombre comercial "Turno" (o cambiarlo si hay
      conflicto de marca).
- [ ] Revisar el logo generado (`assets/logo.svg`) — es un punto de partida,
      no una identidad de marca final.
- [ ] Si en el futuro se agregan testimonios reales de peluquerías clientas,
      agregarlos con nombre y consentimiento real — se decidió **no**
      incluir testimonios ficticios para no presentar citas falsas como
      reales.
- [ ] Meta tag `og:image` / redes sociales si se va a compartir el link.

## Fuera de alcance de esta versión

- Precios/planes.
- Formulario de contacto propio (usa `mailto:` simple).
- Blog o contenido más allá de la landing.
- Multi-idioma.
