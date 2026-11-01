import validator from "validator";

// Validates and sanitises the contact form. Returns { errors, clean }.
export function validateContact(body = {}) {
  const errors = {};
  const str = (v) => (typeof v === "string" ? v.trim() : "");

  const name = str(body.name);
  const email = str(body.email).toLowerCase();
  const subject = str(body.subject);
  const message = str(body.message);

  if (name.length < 2 || name.length > 80) errors.name = "Name must be 2–80 characters.";
  if (!validator.isEmail(email) || email.length > 120) errors.email = "Please enter a valid email address.";
  if (subject.length < 3 || subject.length > 120) errors.subject = "Subject must be 3–120 characters.";
  if (message.length < 10 || message.length > 2000) errors.message = "Message must be 10–2000 characters.";

  // Block links-heavy spam
  const links = (message.match(/https?:\/\//gi) || []).length;
  if (links > 2) errors.message = "Too many links in the message.";

  // Escape HTML so stored/emailed text can never run as code
  const clean = {
    name: validator.escape(name),
    email,
    subject: validator.escape(subject),
    message: validator.escape(message),
  };
  return { errors, clean };
}
