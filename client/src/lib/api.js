const ACCESS_KEY = "8e76a8b3-0032-4f99-9c2c-429cb57a3797";

export async function sendContact(payload) {
  // Hidden trap field: if a bot filled it in, pretend success and send nothing
  if (payload.website) return { ok: true };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      name: payload.name,
      email: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      message: payload.message,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}
