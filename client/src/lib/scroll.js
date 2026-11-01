// Scrolls to a section on the home page. Works from any page (HashRouter-friendly).
export function scrollToSection(id, navigate, pathname) {
  const go = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  if (pathname !== "/") {
    navigate("/");
    setTimeout(go, 150);
  } else {
    go();
  }
}
