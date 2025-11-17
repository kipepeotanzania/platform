import { ReactNode, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Helmet from "@/components/SEO/Helmet";
import { useAuth } from "@/hooks/useAuth";
import LocalImg from "@/components/media/LocalImg";

const NAV_LINKS = [
  {
    label: "Acerca de",
    to: "/acerca-de",
    children: [
      { label: "Origen", to: "/acerca-de/origen" },
      { label: "Quiénes somos", to: "/acerca-de/quienes-somos" },
      { label: "Misión", to: "/acerca-de/mision" },
      { label: "Objetivos", to: "/acerca-de/objetivos" },
      { label: "Transparencia", to: "/acerca-de/transparencia" },
      { label: "Dónde estamos", to: "/acerca-de/donde-estamos" },
    ],
  },
  { label: "Proyectos", to: "/proyectos" },
  {
    label: "Colabora",
    to: "/colabora",
    children: [
      { label: "Ser socio/a", to: "/colabora/ser-socio" },
      { label: "Dona ahora", to: "/colabora/dona-ahora" },
      { label: "Voluntariado", to: "/colabora/voluntariado" },
    ],
  },
  { label: "Viaja", to: "/viaja" },
  { label: "Galería", to: "/galeria" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contacto" },
];

export default function MainLayout({ children, meta }: { children: ReactNode; meta: any }) {
  const { pathname } = useLocation();
  const canonical = new URL(meta?.canonical || pathname, "https://www.kipepeo.ngo").toString();

  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Cerrar todo al navegar */
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setUserMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname]);

  /** Funciones seguras de hover */
  const handleEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(label);
  };
  const handleLeave = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown((curr) => (curr === label ? null : curr));
    }, 200);
  };

  const toggleUserMenu = () => setUserMenuOpen((prev) => !prev);
  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

  const avatarInitials = user ? `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase() : "";

  return (
    <>
      <Helmet meta={{ title: meta.title, description: meta.description, canonical }} />
      <div className="min-h-screen flex flex-col" style={{ background: "var(--brand-bg)" }}>
        {/* NAVBAR */}
        <header
          className="sticky top-0 z-[60] border-b border-white/50 backdrop-blur"
          style={{ background: "rgba(255,255,255,.95)" }}
        >
          <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-4">
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity text-xl font-semibold"
              aria-label="Ir a inicio"
              style={{ color: "var(--brand-primary)" }}
            >
              <LocalImg src="/images/logo.png" alt="Kipepeo logo" className="h-10 w-auto object-contain" />
              Kipepeo
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              {NAV_LINKS.map((item) => {
                const hasChildren = !!item.children?.length;
                if (!hasChildren)
                  return (
                    <NavLink
                      key={item.label}
                      to={item.to || "#"}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-xl transition-colors ${
                          isActive
                            ? "bg-[color:var(--brand-secondary)]/40 text-[color:var(--brand-primary)] shadow"
                            : "text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );

                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleEnter(item.label)}
                    onMouseLeave={() => handleLeave(item.label)}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      className={`px-3 py-2 rounded-xl flex items-center gap-1 transition-colors ${
                        pathname.startsWith(item.to || "")
                          ? "bg-[color:var(--brand-secondary)]/40 text-[color:var(--brand-primary)] shadow"
                          : "text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]"
                      }`}
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        style={{ display: "inline-block" }}
                      >
                        ▾
                      </span>
                    </button>

                    {/* PANEL DROPDOWN */}
                    {isOpen && (
                      <div
                        role="menu"
                        aria-label={`Submenú ${item.label}`}
                        className="absolute left-0 top-full mt-2 min-w-[240px] rounded-2xl bg-white shadow-lg border border-white/70 z-[70] animate-fade"
                        onMouseEnter={() => handleEnter(item.label)}
                        onMouseLeave={() => handleLeave(item.label)}
                      >
                        {item.to && (
                          <NavLink
                            to={item.to}
                            className="px-4 py-3 text-sm rounded-t-2xl hover:bg-[color:var(--brand-secondary)]/15 block text-[color:var(--brand-text)]"
                          >
                            Ver “{item.label}”
                          </NavLink>
                        )}
                        {item.children!.map((child, idx) => {
                          const last = idx === item.children!.length - 1;
                          return (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                `px-4 py-2 text-sm block ${
                                  isActive
                                    ? "bg-[color:var(--brand-secondary)]/25 text-[color:var(--brand-primary)]"
                                    : "text-[color:var(--brand-text)] hover:bg-[color:var(--brand-secondary)]/15"
                                } ${last ? "rounded-b-2xl" : ""}`
                              }
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </NavLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link to="/colabora/dona-ahora" className="btn-primary ml-2">
                Dona ahora
              </Link>
              {user ? (
                <div className="relative ml-1">
                  <button
                    type="button"
                    className="h-11 w-11 rounded-full border border-white/70 bg-white flex items-center justify-center shadow"
                    onClick={toggleUserMenu}
                    aria-label="Menú de usuario"
                  >
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt={user.firstName} className="h-full w-full rounded-full object-cover" />
                    ) : (
                      <span className="font-semibold" style={{ color: "var(--brand-primary)" }}>
                        {avatarInitials || "🙂"}
                      </span>
                    )}
                  </button>
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-white/70 shadow-lg p-3 text-sm space-y-2 z-[80]">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--brand-secondary)" }}>
                          Hola, {user.firstName}
                        </p>
                      </div>
                      <Link
                        to="/perfil"
                        className="block px-3 py-2 rounded-xl hover:bg-[color:var(--brand-secondary)]/15"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Perfil
                      </Link>
                      <Link
                        to="/dashboard"
                        className="block px-3 py-2 rounded-xl hover:bg-[color:var(--brand-secondary)]/15"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        type="button"
                        className="w-full px-3 py-2 rounded-xl text-left text-rose-600 hover:bg-rose-50"
                        onClick={handleLogout}
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full border border-[color:var(--brand-primary)] text-[color:var(--brand-primary)] font-semibold ml-1 hover:bg-white"
                >
                  Join now
                </Link>
              )}
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </nav>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur border-t border-white/60 px-4 pb-4 z-[55] animate-fade">
              {NAV_LINKS.map((item) => {
                const hasChildren = !!item.children?.length;
                const openAcc = openDropdown === item.label;
                if (!hasChildren)
                  return (
                    <NavLink
                      key={item.label}
                      to={item.to || "#"}
                      className="block px-3 py-3 rounded-xl text-[color:var(--brand-text)] hover:bg-[color:var(--brand-secondary)]/15"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  );
                return (
                  <div key={item.label} className="py-2">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl bg-white border border-white/70"
                      onClick={() => setOpenDropdown(openAcc ? null : item.label)}
                      aria-expanded={openAcc}
                    >
                      <span className="text-[color:var(--brand-text)]">{item.label}</span>
                      <span className={`transition-transform ${openAcc ? "rotate-180" : ""}`}>▾</span>
                    </button>
                    {openAcc && (
                      <div className="pl-3 pt-2">
                        {item.to && (
                          <NavLink
                            to={item.to}
                            className="block px-3 py-2 rounded-lg hover:bg-[color:var(--brand-secondary)]/15"
                            onClick={() => {
                              setMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            Ver “{item.label}”
                          </NavLink>
                        )}
                        {item.children!.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className="block px-3 py-2 rounded-lg hover:bg-[color:var(--brand-secondary)]/15"
                            onClick={() => {
                              setMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link
                to="/colabora/dona-ahora"
                className="btn-primary w-full mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Dona ahora
              </Link>
              {user ? (
                <div className="mt-4 rounded-2xl border border-white/70 p-4 space-y-2">
                  <p className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
                    Hola, {user.firstName}
                  </p>
                  <Link
                    to="/perfil"
                    className="block px-3 py-2 rounded-xl bg-[color:var(--brand-secondary)]/20 text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-xl bg-white border border-white/70 text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    className="w-full px-3 py-2 rounded-xl text-rose-600 border border-rose-100"
                    onClick={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                  >
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block text-center mt-2 px-4 py-3 rounded-full border border-[color:var(--brand-primary)] text-[color:var(--brand-primary)] font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Join now
                </Link>
              )}
            </div>
          )}
        </header>

        {/* CONTENIDO */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer
          className="mt-16 text-sm"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.85), var(--brand-bg))" }}
        >
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="font-semibold text-lg" style={{ color: "var(--brand-primary)" }}>
                Kipepeo Tanzania
              </h4>
              <p style={{ color: "var(--brand-muted)" }}>
                Educación, cariño y oportunidades desde Mto Wa Mbu, Manyara.
              </p>
            </div>
            <div className="space-y-2">
              <Link to="/acerca-de">Acerca de</Link>
              <Link to="/legal/privacidad" className="block">
                Privacidad
              </Link>
              <Link to="/legal/cookies" className="block">
                Cookies
              </Link>
              <Link to="/legal/terminos" className="block">
                Términos
              </Link>
            </div>
            <div>
              <p className="font-semibold">Síguenos</p>
              <div className="flex gap-3 mt-2">
                <a href="#" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" aria-label="Facebook">
                  Facebook
                </a>
                <a href="#" aria-label="TikTok">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* CSS Animaciones */}
      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fade 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
