// Scrolls to a section on the home page. Works from any page (HashRouter-friendly).
export function scrollToSection(id, navigate, pathname) {
  const go = () => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = id === "home" ? 0 : el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  };
  if (pathname !== "/") {
    navigate("/");
    setTimeout(go, 250);
  } else {
    go();
  }
}
