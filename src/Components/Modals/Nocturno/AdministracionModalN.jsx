import React from "react";
import Administracion from "../../../JSON/Nocturno/Administracion.json";

export default function AdministracionModalN({ estado, cambiarEstado }) {
  return (
    <>
      {estado && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 font-Poppins backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-White p-5 shadow-2xl dark:border dark:border-White dark:bg-black md:p-8">
            <h1 className="text-blue-diabg-Blue-Dianne md: p-2 text-center font-bold md:p-4">
              {Administracion.title}
            </h1>
            <div className="md: flex grid-cols-2 flex-col items-center justify-center lg:grid">
              <div>
                <table className="overflow-hidden rounded-lg md:m-4">
                  <tr className="bg-Blue-Dianne">
                    <td className="text-center text-White md:px-12 md:py-2">
                      Sub-Área
                    </td>
                    <td className="px-6 py-1 text-center text-White md:px-12 md:py-2">
                      X
                    </td>
                    <td className="text-center text-White md:px-12 md:py-2">
                      XI
                    </td>
                    <td className="text-center text-White md:px-12 md:py-2">
                      XII
                    </td>
                  </tr>
                  <tbody className="text-center">
                    {Administracion.Subarea.map((subarea, index) => (
                      <tr key={index}>
                        <td className="border-2 border-white bg-Blue-Dianne py-1 text-White dark:border-black md:p-2 md:px-6">
                          {subarea.MyTA ||
                            subarea.GEA ||
                            subarea.CA ||
                            subarea.NLA ||
                            subarea.EDCI ||
                            subarea.EOTA ||
                            subarea.EFC}
                        </td>
                        <td className="border-2 border-white bg-Blue-Dianne px-5 py-1 text-White dark:border-black md:p-2 md:px-6">
                          {subarea.Horas.Decimo}
                        </td>
                        <td className="border-2 border-white bg-Blue-Dianne px-5 py-1 text-White dark:border-black md:p-2 md:px-6">
                          {subarea.Horas.Undecimo}
                        </td>
                        <td className="border-2 border-white bg-Blue-Dianne px-5 py-1 text-White dark:border-black md:p-2 md:px-6">
                          {subarea.Horas.Duodecimo}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <tr className="bg-Blue-Dianne text-center text-white">
                    <td className="md:px-12 md:py-2">Horas totales</td>
                    <td className="md:px-12 md:py-2">
                      {Administracion.Total.Decimo}{" "}
                    </td>
                    <td className="md:px-12 md:py-2">
                      {Administracion.Total.Undecimo}{" "}
                    </td>
                    <td className="md:px-12 md:py-2">
                      {Administracion.Total.Duodecimo}{" "}
                    </td>
                  </tr>
                </table>
              </div>

              <section className="mt-4 flex gap-8 md:justify-evenly">
                <section>
                  <h2 className="text-blue-Diabg-Blue-Dianne font-bold">
                    Posibles Puestos de Trabajo
                  </h2>
                  <ul>
                    {Administracion.posiblesPuestos.map((puesto, index) => (
                      <li
                        className="my-4 rounded-lg bg-Blue-Dianne px-6 py-1 text-white md:p-2"
                        key={index}
                      >
                        {puesto}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-blue-Diabg-Blue-Dianne font-bold">
                    Posibles Empresas
                  </h2>
                  <ul>
                    {Administracion.posiblesEmpresas.map((empresa, index) => (
                      <li
                        className="my-4 rounded-lg bg-Blue-Dianne px-6 py-1 text-white md:p-2"
                        key={index}
                      >
                        {empresa}
                      </li>
                    ))}
                  </ul>
                </section>
              </section>
              <i
                onClick={() => cambiarEstado(false)}
                class="fa-sharp fa-solid fa-xmark md: absolute right-1 top-1 cursor-pointer rounded-full px-6 py-1 hover:bg-Blue-Dianne hover:text-White md:right-12 md:top-4 md:p-2"
              ></i>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
