// In development the Vite dev server talks to the backend on port 5000.
// In production set VITE_API_URL (e.g. https://your-api.onrender.com) before building.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function sendContact(payload) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.message || "Something went wrong. Please try again.");
    err.fields = data.errors || {};
    throw err;
  }
  return data;
}
