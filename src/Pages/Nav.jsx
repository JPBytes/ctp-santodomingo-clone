import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import enFlagIMG from "../Assets/Flags/en.png";
import esFlagIMG from "../Assets/Flags/es.png";

export default function Nav() {
  const [estadoNav, setEstadoNav] = useState(false);
  const [estadoDropbox, setEstadoDropbox] = useState(false);

  const [idiomaActual, setIdiomaActual] = useState("");
  const [theme, setTheme] = useState("");

  const { t, i18n } = useTranslation("nav");
  const location = useLocation();

  const Language = i18n.language;

  useEffect(() => {
    const idiomaGuardado = localStorage.getItem("idiomaActual");
    const temaGuardado = localStorage.getItem("theme");

    if (idiomaGuardado) {
      setIdiomaActual(idiomaGuardado);
      i18n.changeLanguage(idiomaGuardado);
    } else {
      setIdiomaActual(i18n.language);
    }

    if (temaGuardado) {
      setTheme(temaGuardado);

      document.documentElement.classList.toggle(
        "dark",
        temaGuardado === "dark",
      );
    } else {
      setTheme("light");
    }
  }, [i18n]);

  function changeLanguage() {
    const nuevoIdioma = idiomaActual === "es" ? "en" : "es";

    setIdiomaActual(nuevoIdioma);
    i18n.changeLanguage(nuevoIdioma);

    localStorage.setItem("idiomaActual", nuevoIdioma);
  }

  const handleChangeTheme = () => {
    const nuevoTema = theme === "light" ? "dark" : "light";

    setTheme(nuevoTema);
    localStorage.setItem("theme", nuevoTema);

    document.documentElement.classList.toggle("dark", nuevoTema === "dark");
  };

  const isActive = (path) => location.pathname === path;

  const closeMobileMenu = () => {
    setEstadoNav(false);
    setEstadoDropbox(false);
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <nav className="sticky top-0 z-50 hidden border-b border-gray-100 bg-white/95 backdrop-blur-md dark:bg-gray-950/95 lg:block">
        <div className="mx-auto flex h-[82px] w-[92%] max-w-[1400px] items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo del CTP Santo Domingo"
              className="h-14 w-14 object-contain"
            />

            <div className="border-l border-gray-200 pl-3 dark:border-gray-700">
              <p className="text-[13px] font-semibold leading-tight text-gray-800 dark:text-white">
                Colegio Técnico Profesional
              </p>

              <p className="text-[13px] font-semibold leading-tight text-gray-800 dark:text-white">
                de Santo Domingo
              </p>
            </div>
          </Link>

          {/* MENU */}
          <ul className="flex items-center gap-7 font-Poppins">
            <li>
              <Link
                to="/"
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-Atlantis"
                    : "text-gray-600 hover:text-Atlantis dark:text-gray-300"
                } `}
              >
                {t("Home")}

                {isActive("/") && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-Atlantis" />
                )}
              </Link>
            </li>

            <li>
              <Link
                to="/Events"
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive("/Events")
                    ? "text-Atlantis"
                    : "text-gray-600 hover:text-Atlantis dark:text-gray-300"
                } `}
              >
                {t("Events")}

                {isActive("/Events") && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-Atlantis" />
                )}
              </Link>
            </li>

            <li>
              <Link
                to="/Services"
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive("/Services")
                    ? "text-Atlantis"
                    : "text-gray-600 hover:text-Atlantis dark:text-gray-300"
                } `}
              >
                {t("Services")}

                {isActive("/Services") && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-Atlantis" />
                )}
              </Link>
            </li>

            <li>
              <Link
                to="/Gallery"
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive("/Gallery")
                    ? "text-Atlantis"
                    : "text-gray-600 hover:text-Atlantis dark:text-gray-300"
                } `}
              >
                {t("Gallery")}

                {isActive("/Gallery") && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-Atlantis" />
                )}
              </Link>
            </li>

            {/* COORDINACIONES */}
            <li className="relative">
              <button
                onClick={() => setEstadoDropbox(!estadoDropbox)}
                className="flex items-center gap-2 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-Atlantis dark:text-gray-300"
              >
                {t("Coordinations.title")}

                <i
                  className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${estadoDropbox ? "rotate-180" : ""} `}
                />
              </button>

              {estadoDropbox && (
                <div className="absolute left-1/2 top-full mt-3 w-60 -translate-x-1/2 overflow-hidden rounded-lg border border-gray-100 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <Link
                    to="/CTechnical"
                    onClick={() => setEstadoDropbox(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-Atlantis dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    {t("Coordinations.Technical")}
                  </Link>

                  <Link
                    to="/CAcademic"
                    onClick={() => setEstadoDropbox(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-Atlantis dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    {t("Coordinations.Academic")}
                  </Link>

                  <Link
                    to="/CCompany"
                    onClick={() => setEstadoDropbox(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-Atlantis dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    {t("Coordinations.Company")}
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/UP"
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive("/UP")
                    ? "text-Atlantis"
                    : "text-gray-600 hover:text-Atlantis dark:text-gray-300"
                } `}
              >
                {t("UP")}

                {isActive("/UP") && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-Atlantis" />
                )}
              </Link>
            </li>
          </ul>

          {/* CONTROLES */}
          <div className="flex items-center gap-2">
            {/* THEME */}
            <button
              onClick={handleChangeTheme}
              aria-label="Cambiar tema"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-Atlantis hover:text-Atlantis dark:border-gray-700 dark:text-gray-200"
            >
              {theme === "light" ? (
                <i className="fa-solid fa-moon text-sm" />
              ) : (
                <i className="fa-regular fa-sun text-sm" />
              )}
            </button>

            {/* LANGUAGE */}
            <button
              onClick={changeLanguage}
              className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-3 text-sm font-semibold text-gray-700 transition hover:border-Atlantis hover:text-Atlantis dark:border-gray-700 dark:text-gray-200"
            >
              <img
                className="h-4 w-5 object-cover"
                src={Language === "es" ? esFlagIMG : enFlagIMG}
                alt=""
              />

              {Language === "es" ? "ES" : "EN"}

              <i className="fa-solid fa-chevron-down text-[9px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE ================= */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md dark:bg-gray-950/95 lg:hidden">
        <div className="flex h-[72px] items-center justify-between px-5">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo del CTP Santo Domingo"
              className="h-11 w-11 object-contain"
            />

            <div>
              <p className="text-[10px] font-semibold leading-tight text-gray-800 dark:text-white">
                Colegio Técnico Profesional
              </p>

              <p className="text-[10px] font-semibold leading-tight text-gray-800 dark:text-white">
                de Santo Domingo
              </p>
            </div>
          </Link>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleChangeTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-200"
            >
              {theme === "light" ? (
                <i className="fa-solid fa-moon text-xs" />
              ) : (
                <i className="fa-regular fa-sun text-xs" />
              )}
            </button>

            <button
              onClick={() => setEstadoNav(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-Atlantis text-white"
            >
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {estadoNav && (
          <div className="fixed inset-0 z-[100] bg-white dark:bg-black">
            <div className="flex h-[72px] items-center justify-between border-b  px-5">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center gap-2"
              >
                <img
                  src={Logo}
                  alt="Logo del CTP Santo Domingo"
                  className="h-11 w-11 object-contain"
                />

                <div>
                  <p className="text-[10px] font-semibold leading-tight text-gray-800 dark:text-white">
                    Colegio Técnico Profesional
                  </p>

                  <p className="text-[10px] font-semibold leading-tight text-gray-800 dark:text-white">
                    de Santo Domingo
                  </p>
                </div>
              </Link>

              <button
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            {/* LINKS */}
            <div className="px-5 py-8 bg-black">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-Atlantis">
                Menú
              </p>

              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-lg px-4 py-4 text-base font-medium ${
                    isActive("/")
                      ? "bg-Atlantis text-white"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
                  } `}
                >
                  {t("Home")}
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>

                <Link
                  to="/Events"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-lg px-4 py-4 text-base font-medium ${
                    isActive("/Events")
                      ? "bg-Atlantis text-white"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
                  } `}
                >
                  {t("Events")}
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>

                <Link
                  to="/Services"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-lg px-4 py-4 text-base font-medium ${
                    isActive("/Services")
                      ? "bg-Atlantis text-white"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
                  } `}
                >
                  {t("Services")}
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>

                <Link
                  to="/Gallery"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-lg px-4 py-4 text-base font-medium ${
                    isActive("/Gallery")
                      ? "bg-Atlantis text-white"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
                  } `}
                >
                  {t("Gallery")}
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>

                {/* COORDINACIONES */}
                <button
                  onClick={() => setEstadoDropbox(!estadoDropbox)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
                >
                  {t("Coordinations.title")}

                  <i
                    className={`fa-solid fa-chevron-down text-xs transition-transform ${estadoDropbox ? "rotate-180" : ""} `}
                  />
                </button>

                {estadoDropbox && (
                  <div className="ml-4 space-y-1 border-l-2 border-Atlantis pl-3">
                    <Link
                      to="/CTechnical"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                    >
                      {t("Coordinations.Technical")}
                    </Link>

                    <Link
                      to="/CAcademic"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                    >
                      {t("Coordinations.Academic")}
                    </Link>

                    <Link
                      to="/CCompany"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                    >
                      {t("Coordinations.Company")}
                    </Link>
                  </div>
                )}

                <Link
                  to="/UP"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-lg px-4 py-4 text-base font-medium ${
                    isActive("/UP")
                      ? "bg-Atlantis text-white"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
                  } `}
                >
                  {t("UP")}
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>
              </div>

              {/* LANGUAGE */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <button
                  onClick={changeLanguage}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-4 dark:border-gray-700"
                >
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Idioma
                  </span>

                  <span className="flex items-center gap-2 font-semibold">
                    <img
                      src={Language === "es" ? esFlagIMG : enFlagIMG}
                      className="h-4 w-5 object-cover"
                      alt=""
                    />

                    {Language === "es" ? "Español" : "English"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
}
