import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import Informacion from "../Components/Informacion";
import Danger from "../Assets/IMGS/Danger.webp";
import Contact from "../Components/contact";
import Map from "../Components/Map";
import Video from "../Assets/Videos/videoCTP.webm";
import ContabilidadModal from "../Components/Modals/Diurno/ContabilidadModal";
import DesarrolloModal from "../Components/Modals/Diurno/DesarrolloModal";
import DisenoModal from "../Components/Modals/Diurno/DisenoModal";
import EjecutivoModal from "../Components/Modals/Diurno/EjecutivoModal";
import ElectronicaModal from "../Components/Modals/Diurno/Electronica";
import GestionModal from "../Components/Modals/Diurno/GestionModal";
import MecanicaModal from "../Components/Modals/Diurno/Mecanica";
import EjecutivoModalN from "../Components/Modals/Nocturno/EjecutivoModalN.jsx";
import CySModalN from "../Components/Modals/Nocturno/CySModalN.jsx";
import ContabilidadModalN from "../Components/Modals/Nocturno/ContabilidadModalN.jsx";
import AdministracionModal from "../Components/Modals/Nocturno/AdministracionModalN.jsx";
import MecanicaModalN from "../Components/Modals/Nocturno/MecanicaModalN.jsx";

import DyMModal from "../Components/Modals/Diurno/DyMModal.jsx";
function Home() {
  const { t } = useTranslation("information");

  const [estadoModal, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);

  const [specialtySelected, setSpecialtySelected] = useState("Diurno");

  return (
    <Suspense fallback="Cargando informacion">
      <div className="relative font-Lato text-black transition-all duration-500 dark:bg-black dark:text-White">
        <section className="Container m-auto overflow-hidden transition-all duration-500">
          <section className="relative mb-20 overflow-hidden">
            <video
              src={Video}
              autoPlay
              muted
              loop
              playsInline
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-8 md:px-14">
                <span className="mb-4 inline-block rounded-full bg-Atlantis px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  {t("Header.name1")}
                </span>

                <h1 className="font-Poppins text-4xl font-bold leading-tight text-white md:text-6xl">
                  {t("Header.name2")}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                  {t("Header.description")}
                </p>

                <a
                  href="#Especialidades-Diurno"
                  className="mt-8 inline-flex items-center gap-3 rounded-lg bg-Atlantis px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-Sycamore"
                >
                  {t("Header.cta")}
                  <i className="fa-solid fa-arrow-right text-sm" />
                </a>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 hidden items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs text-white backdrop-blur-md md:flex">
              <span className="h-2 w-2 rounded-full bg-Atlantis" />
              Formación técnica para el futuro
            </div>
          </section>

          <section className="m-auto mb-20 grid w-[95%] grid-cols-2 gap-6">
            <article className="cursor-pointer rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-Atlantis dark:text-black">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-Atlantis/10 text-2xl text-Atlantis">
                <i className="fa-solid fa-bullseye" />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-Atlantis">
                {t("Vision.title2")}
              </p>

              <h2 className="mb-4 font-Poppins text-2xl font-bold">
                {t("Vision.title")}
              </h2>

              <p className="leading-7 text-black">{t("Vision.body")}</p>
            </article>

            <article className="cursor-pointer rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-Atlantis dark:text-black">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-Atlantis/10 text-2xl text-Atlantis">
                <i className="fa-solid fa-book-open" />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-Atlantis">
                {t("Mission.title2")}
              </p>

              <h2 className="mb-4 font-Poppins text-2xl font-bold">
                {t("Mission.title")}
              </h2>

              <p className="leading-7 text-black">
                {t("Mission.body", {
                  CTPName: "Colegio Técnico Profesional de Santo Domingo",
                })}
              </p>
            </article>
          </section>

          <section className="m-auto mb-20 w-[95%]">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-Atlantis">
                {t("Valores.title2")}
              </p>

              <h2 className="mt-2 font-Poppins text-3xl font-bold">
                {t("Valores.title")}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:grid-cols-5">
              {[
                ["fa-shield-halved", "Honesty"],
                ["fa-handshake", "Respect"],
                ["fa-bullseye", "Commitment"],
                ["fa-gears", "Responsability"],
                ["fa-users", "Trust"],
                ["fa-heart", "Solidarity"],
                ["fa-people-group", "FACT"],
                ["fa-people-group", "TW"],
                ["fa-graduation-cap", "DAE"],
              ].map(([icon, value]) => (
                <article
                  key={value}
                  className="group cursor-pointer rounded-lg border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-Atlantis"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Atlantis/10 text-lg text-Atlantis transition-all duration-300 group-hover:bg-Atlantis group-hover:text-white">
                    <i className={`fa-solid ${icon}`} />
                  </div>

                  <h3 className="font-Poppins font-bold dark:text-black">
                    {t(`Valores.listValores.${value}`)}
                  </h3>
                </article>
              ))}
            </div>
          </section>

          <section className="m-auto w-[95%]">
            <Informacion
              extra={
                <div>
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="flex items-center gap-2 font-Poppins text-sm text-black">
                          <hr className="h-2 w-6 bg-Atlantis uppercase" />
                          {t("EO.title")}
                        </h1>
                        <p className="mb-6 text-pretty text-xl font-bold">
                          {t("EO.body")}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <p
                          className="my-4 flex cursor-pointer items-center justify-center rounded-lg bg-Atlantis px-6 py-2 text-center text-White transition-colors duration-200 hover:bg-Sycamore"
                          onClick={() => {
                            setSpecialtySelected("Diurno");
                          }}
                        >
                          {t("EO.timeDiurno")}
                        </p>
                        <p
                          className="my-4 flex cursor-pointer items-center justify-center rounded-lg bg-Blue-Dianne px-6 py-2 text-center text-White transition-colors duration-200 hover:bg-Blue-Dianne/80"
                          onClick={() => {
                            setSpecialtySelected("Nocturno");
                          }}
                        >
                          {t("EO.timeNocturna")}
                        </p>
                      </div>
                    </div>
                    {specialtySelected === "Diurno" && (
                      <section id="Especialidades-Diurno">
                        <ul className="my-4 flex grid-cols-4 flex-col gap-4 md:grid">
                          <button
                            onClick={() => cambiarEstadoModal1(!estadoModal)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Atlantis dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Atlantis/10 text-Atlantis">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities.DP")}
                              </h3>
                            </div>

                            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-Atlantis">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <DisenoModal
                            estado={estadoModal}
                            cambiarEstado={cambiarEstadoModal1}
                          />

                          <button
                            onClick={() => cambiarEstadoModal2(!estadoModal2)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Atlantis dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Atlantis/10 text-Atlantis">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities.ECYSA")}
                              </h3>
                            </div>

                            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-Atlantis">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <EjecutivoModal
                            estado={estadoModal2}
                            cambiarEstado={cambiarEstadoModal2}
                          />

                          <button
                            onClick={() => cambiarEstadoModal3(!estadoModal3)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:border-Atlantis hover:shadow-lg hover:shadow-Atlantis dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg text-Atlantis">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities.CyF")}
                              </h3>
                            </div>

                            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-Atlantis">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <ContabilidadModal
                            estado={estadoModal3}
                            cambiarEstado={cambiarEstadoModal3}
                          />

                          <button
                            onClick={() => cambiarEstadoModal4(!estadoModal4)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Atlantis dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Atlantis/10 text-Atlantis">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities.DDAM")}
                              </h3>
                            </div>

                            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-Atlantis">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>
                          <DesarrolloModal
                            estado={estadoModal4}
                            cambiarEstado={cambiarEstadoModal4}
                          />

                          <button
                            onClick={() => cambiarEstadoModal1(!estadoModal)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Atlantis dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Atlantis/10 text-Atlantis">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities.DyMDE")}
                              </h3>
                            </div>

                            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-Atlantis">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>
                          <DyMModal
                            estado={estadoModal5}
                            cambiarEstado={cambiarEstadoModal5}
                          />

                          <button
                            onClick={() => cambiarEstadoModal1(!estadoModal)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Atlantis dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Atlantis/10 text-Atlantis">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities.EET")}
                              </h3>
                            </div>

                            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-Atlantis">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <ElectronicaModal
                            estado={estadoModal6}
                            cambiarEstado={cambiarEstadoModal6}
                          />

                          <button
                            onClick={() => cambiarEstadoModal1(!estadoModal)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Atlantis dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Atlantis/10 text-Atlantis">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities.GDLP")}
                              </h3>
                            </div>

                            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-Atlantis">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <GestionModal
                            estado={estadoModal7}
                            cambiarEstado={cambiarEstadoModal7}
                          />

                          <button
                            onClick={() => cambiarEstadoModal1(!estadoModal)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Atlantis dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Atlantis/10 text-Atlantis">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities.RDLVL")}
                              </h3>
                            </div>

                            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-Atlantis">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <MecanicaModal
                            estado={estadoModal8}
                            cambiarEstado={cambiarEstadoModal8}
                          />
                        </ul>
                      </section>
                    )}

                    {specialtySelected === "Nocturno" && (
                      <section id="Especialidades-Nocturno">
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex gap-8 pt-2">
                            <p className="font-bold text-Fuscous">
                              {t("EO.Requirements.title")}
                            </p>
                            <div>
                              <ul>
                                <li className="list-disc text-gray-500">
                                  {t("EO.Requirements.1")}
                                </li>
                                <li className="list-disc text-gray-500">
                                  {t("EO.Requirements.2")}
                                </li>
                                <li className="list-disc text-gray-500">
                                  {t("EO.Requirements.3")}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <ul className="my-4 flex grid-cols-4 flex-col gap-4 md:grid">
                          <button
                            onClick={() => cambiarEstadoModal9(!estadoModal9)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Blue-Dianne dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Blue-Dianne/40 text-Blue-Dianne">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities-2.ECYSA")}
                              </h3>
                            </div>

                            <span className="text-bg-Blue-Dianne mt-6 flex items-center gap-2 text-sm font-bold">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <EjecutivoModalN
                            estado={estadoModal9}
                            cambiarEstado={cambiarEstadoModal9}
                          />

                          <button
                            onClick={() => cambiarEstadoModal10(!estadoModal10)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Blue-Dianne dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Blue-Dianne/40 text-Blue-Dianne">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities-2.CySDRySO")}
                              </h3>
                            </div>

                            <span className="text-bg-Blue-Dianne mt-6 flex items-center gap-2 text-sm font-bold">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <CySModalN
                            estado={estadoModal10}
                            cambiarEstado={cambiarEstadoModal10}
                          />

                          <button
                            onClick={() => cambiarEstadoModal11(!estadoModal11)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Blue-Dianne dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Blue-Dianne/40 text-Blue-Dianne">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities-2.Contabilidad")}
                              </h3>
                            </div>

                            <span className="text-bg-Blue-Dianne mt-6 flex items-center gap-2 text-sm font-bold">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <ContabilidadModalN
                            estado={estadoModal11}
                            cambiarEstado={cambiarEstadoModal11}
                          />

                          <button
                            onClick={() => cambiarEstadoModal12(!estadoModal12)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Blue-Dianne dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Blue-Dianne/40 text-Blue-Dianne">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities-2.ADLOA")}
                              </h3>
                            </div>

                            <span className="text-bg-Blue-Dianne mt-6 flex items-center gap-2 text-sm font-bold">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <AdministracionModal
                            estado={estadoModal12}
                            cambiarEstado={cambiarEstadoModal12}
                          />

                          <button
                            onClick={() => cambiarEstadoModal13(!estadoModal13)}
                            className="group flex min-h-[190px] flex-col justify-between rounded-lg border bg-white p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-Blue-Dianne dark:text-black"
                          >
                            <div>
                              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-Blue-Dianne/40 text-Blue-Dianne">
                                <i className="fa-solid fa-briefcase" />
                              </div>

                              <h3 className="font-Poppins text-lg font-bold">
                                {t("EO.specialities-2.RDLVL")}
                              </h3>
                            </div>

                            <span className="text-bg-Blue-Dianne mt-6 flex items-center gap-2 text-sm font-bold">
                              {t("EO.cta")}
                              <i className="fa-solid fa-arrow-right text-xs transition-transform" />
                            </span>
                          </button>

                          <MecanicaModalN
                            estado={estadoModal13}
                            cambiarEstado={cambiarEstadoModal13}
                          />
                        </ul>
                      </section>
                    )}
                  </div>
                </div>
              }
            />
          </section>

          <section id="Contact" className="m-auto my-12 flex flex-col md:flex-row w-[95%] gap-4">
            <div className="md:w-1/3">
              <h1 className="flex items-center gap-2 font-Poppins text-sm text-black">
                <hr className="h-2 w-6 bg-Atlantis uppercase" />
                {t("Contact.title")}
              </h1>
              <p className="mb-6 text-pretty text-xl font-bold">
                {t("Contact.description")}
              </p>
              <form
                action="https://formsubmit.co/ctpsantodomingoconsultas@gmail.com"
                method="POST"
                className="flex flex-col flex-wrap gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t("Contact.name")}
                  className="my-2 rounded-lg bg-White p-2 text-white shadow-lg shadow-Atlantis"
                />
                <input
                  type="text"
                  name="email"
                  placeholder={t("Contact.mail")}
                  className="my-2 rounded-lg bg-White p-2 text-white shadow-lg shadow-Atlantis"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder={t("Contact.subject")}
                  className="my-2 rounded-lg bg-White p-2 text-white shadow-lg shadow-Atlantis"
                />
                <textarea
                  name="message"
                  id="Message"
                  placeholder={t("Contact.message")}
                  className="-[250px] my-2 max-h-[120px] rounded-lg bg-White p-2 text-white shadow-lg shadow-Atlantis"
                ></textarea>
                <input
                  type="hidden"
                  name="_next"
                  value="ctp-santodomingo-vercel.app"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Hola!!!, dentro de poco te responderemos,gracias por su mensaje"
                />
                <div className="m-auto flex w-1/3 cursor-pointer items-center justify-center gap-3 rounded-lg bg-Atlantis p-3 text-White hover:scale-90 hover:bg-Blue-Dianne hover:duration-300">
                  <i class="fa-solid fa-paper-plane text-White"></i>
                  <button type="submit" value="Enviar">
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            <section className="m-auto flex flex-col gap-4 md:w-1/3">
              <Contact
                clase="fa-solid fa-phone bg-Atlantis p-2 rounded-full text-White "
                body="(+506) 2244-3190"
                label={t("Contact.phone")}
              />

              <Contact
                clase="fa-solid fa-envelope bg-Atlantis p-2 rounded-full text-White "
                body="ctpsantodomingoconsultas@gmail.com"
                label={t("Contact.mail")}
              />
              <Contact
                clase="fa-solid fa-map bg-Atlantis p-2 rounded-full text-White "
                body="300 metros Oeste y 25 metros Sur de la Iglesia Católica de Santa Rosa de Santo Domingo, Heredia , Santo Domingo, Costa Rica"
                label={t("Contact.ubication")}
              />
            </section>

            <img
              src={Danger}
              alt="Foto del perro de la institucion"
              className="rounded-lg object-cover md:h-[550px] md:w-1/3"
            />
          </section>

          <section className="mb-12">
            <Map />
          </section>
        </section>
      </div>
    </Suspense>
  );
}

export default Home;
