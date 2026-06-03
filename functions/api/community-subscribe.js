const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

const clean = (value) => String(value ?? "").trim();

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const subscriberTags = ["espanol", "comunidad", "codex-para-todos"];
const defaultSubscribeError = "No pudimos completar la inscripción. Intenta nuevamente en unos minutos.";

const getButtondownMessage = (error) => {
  const message = clean(error.detail ?? error.email_address?.[0] ?? error.email?.[0]);
  const normalized = message.toLowerCase();

  if (!message) return defaultSubscribeError;

  if (normalized.includes("firewall") || normalized.includes("blocked")) {
    return "No pudimos completar la inscripción con ese email. Prueba con otro correo o intenta nuevamente más tarde.";
  }

  if (normalized.includes("tags must")) {
    return defaultSubscribeError;
  }

  if (normalized.includes("valid email") || normalized.includes("invalid email")) {
    return "Ingresa un email válido.";
  }

  return defaultSubscribeError;
};

export async function onRequestPost({ request, env }) {
  const apiKey = env.BUTTONDOWN_API_KEY;
  const buttondownUsername = env.BUTTONDOWN_USERNAME ?? "codexforall";

  let data;

  try {
    data = await request.json();
  } catch {
    return json({ message: "Los datos enviados no son válidos." }, 400);
  }

  const name = clean(data.name);
  const email = clean(data.email).toLowerCase();
  const phone = clean(data.phone);
  const referrerUrl = request.headers.get("referer") ?? "https://codexparatodos.com/comunidad/";
  const url = new URL(request.url);
  const ipAddress = request.headers.get("CF-Connecting-IP") ?? undefined;

  if (!name || name.length < 2) {
    return json({ message: "Ingresa tu nombre." }, 400);
  }

  if (!isValidEmail(email)) {
    return json({ message: "Ingresa un email válido." }, 400);
  }

  if (!phone || phone.replace(/[^\d+]/g, "").length < 8) {
    return json({ message: "Ingresa un teléfono válido." }, 400);
  }

  const metadata = {
    nombre: name,
    telefono: phone,
    idioma: "es",
    fuente: clean(data.source) || "pagina-comunidad",
    formulario: "comunidad-codex-para-todos",
    canal_posterior: "whatsapp",
    tag_idioma: "espanol",
    inscrito_en: new Date().toISOString(),
  };

  const payload = {
    email_address: email,
    tags: subscriberTags,
    metadata,
    notes: `Formulario /comunidad. Nombre: ${name}. Teléfono: ${phone}.`,
    referrer_url: referrerUrl,
    utm_source: url.searchParams.get("utm_source") ?? "web",
    utm_medium: url.searchParams.get("utm_medium") ?? "formulario",
    utm_campaign: url.searchParams.get("utm_campaign") ?? "comunidad",
  };

  if (ipAddress) {
    payload.ip_address = ipAddress;
  }

  const response = apiKey
    ? await fetch("https://api.buttondown.com/v1/subscribers", {
        method: "POST",
        headers: {
          Authorization: `Token ${apiKey}`,
          "Content-Type": "application/json",
          "X-Buttondown-Collision-Behavior": "add",
        },
        body: JSON.stringify(payload),
      })
    : await fetch(`https://buttondown.com/api/emails/embed-subscribe/${buttondownUsername}`, {
        method: "POST",
        body: new URLSearchParams({
          email,
          tag: subscriberTags[0],
          embed: "1",
          "metadata__nombre": name,
          "metadata__telefono": phone,
          "metadata__idioma": "es",
          "metadata__tag_idioma": "espanol",
          "metadata__fuente": "pagina-comunidad",
          "metadata__formulario": "comunidad-codex-para-todos",
          "metadata__canal_posterior": "whatsapp",
        }),
      });

  if (!response.ok) {
    let buttondownError = {};

    try {
      buttondownError = await response.json();
    } catch {
      buttondownError = {};
    }

    return json(
      {
        message: getButtondownMessage(buttondownError),
      },
      response.status === 401 || response.status === 403 ? 503 : 400,
    );
  }

  return json({ ok: true });
}
