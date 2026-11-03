// Scrolls to a section on the home page. Works from any page (HashRouter-friendly).
// On phones/tablets it jumps instantly, because Chrome on Android cancels smooth scrolls.
export function scrollToSection(id, navigate, pathname) {
  const go = () => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = id === "home" ? 0 : el.getBoundingClientRect().top + window.scrollY - 64;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    window.scrollTo({ top, behavior: isMobile ? "auto" : "smooth" });
  };
  if (pathname !== "/") {
    navigate("/");
    setTimeout(go, 300);
  } else {
    go();
  }
}
