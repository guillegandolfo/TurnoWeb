const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const SCRIPTS = {
  hero: [
    { side: "in", text: "Hola! Busco una peluquería cerca de Pocitos para mañana a la tarde" },
    { side: "out", text: "Tengo lugar en Peluquería Lucero (18:00) y Barbería Nico (17:00), las dos a menos de 10 cuadras. ¿Cuál preferís?" },
    { side: "in", text: "Peluquería Lucero a las 18" },
    { side: "out", text: "Listo, quedás agendada mañana 18:00 en Peluquería Lucero con Fede ✅" },
  ],
  reminder: [
    { side: "out", text: "Hola Caro! Te recordamos tu turno de hoy a las 18:00 en Peluquería Lucero con Fede." },
    { side: "in", text: "Genial, ahí estoy 🙌" },
    { side: "out", text: "Te esperamos. Cualquier cambio, avisanos por acá." },
  ],
};

function createBubble(entry) {
  const el = document.createElement("div");
  el.className = `bubble ${entry.side}`;
  el.textContent = entry.text;
  return el;
}

function createTyping() {
  const el = document.createElement("div");
  el.className = "typing-dots";
  el.innerHTML = "<span></span><span></span><span></span>";
  return el;
}

async function playChat(container, script) {
  container.innerHTML = "";

  if (prefersReducedMotion) {
    script.forEach((entry) => container.appendChild(createBubble(entry)));
    return;
  }

  for (const entry of script) {
    const typing = createTyping();
    container.appendChild(typing);
    container.scrollTop = container.scrollHeight;
    await wait(650 + entry.text.length * 12);
    typing.remove();

    container.appendChild(createBubble(entry));
    container.scrollTop = container.scrollHeight;
    await wait(500);
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loopChat(container, script) {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await playChat(container, script);
    if (prefersReducedMotion) return;
    await wait(3200);
  }
}

document.querySelectorAll("[data-chat]").forEach((container) => {
  const script = SCRIPTS[container.dataset.chat];
  if (!script) return;
  loopChat(container, script);
});

// Scroll reveal for section headings/cards
const revealTargets = document.querySelectorAll(
  ".problem-item, .step, .feature-card, .faq-item, .demo2-copy, .hero-copy"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
