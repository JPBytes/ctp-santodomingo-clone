import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";

export default function CTechnichal() {
  const { t } = useTranslation("coordinations");
  return (
    <div className="m-auto w-[90%] text-black transition-all duration-500 dark:text-White">
      <h1 className="lg: mb-12 text-center font-bold text-Atlantis">
        {t("Academic.title")}
      </h1>
      <section className="flex grid-cols-2 flex-col gap-12 lg:grid">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo del CTP Santo Domingo" className="w-1/3" />

          <div className="my-4 flex flex-col gap-4 md:flex-row">
            <div className="lg: flex items-center justify-center gap-2">
              <i class="fa-solid fa-phone-volume"></i>
              <p>{t("Contact.Academic.phone")}</p>
            </div>

            <div className="lg: my-2 flex items-center justify-center gap-2">
              <i class="fa-solid fa-envelope"></i>
              <p>{t("Contact.Academic.mail")}</p>
            </div>
          </div>

          <h2 className="lg: my-4 font-bold text-Sycamore">
            {t("Academic.subtitle")}
          </h2>
          <p className="lg:">{t("Academic.description")}</p>

          <h2 className="lg: my-4 font-bold text-Sycamore">
            {t("Academic.rules.title")}
          </h2>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="lg: list-disc">{t("Academic.rules.1")}</li>
            <li className="lg: list-disc">{t("Academic.rules.2")}</li>
            <li className="lg: list-disc">{t("Academic.rules.3")}</li>
            <li className="lg: list-disc">{t("Academic.rules.4")}</li>
            <li className="lg: list-disc">{t("Academic.rules.5")}</li>
          </ul>
        </div>
        <div>
          <h2 className="lg: my-4 text-center font-bold text-Sycamore">
            {t("Academic.functions.title")}
          </h2>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="lg: list-disc">{t("Academic.functions.1")}</li>
            <li className="lg: list-disc">{t("Academic.functions.2")}</li>
            <li className="lg: list-disc">{t("Academic.functions.3")}</li>
            <li className="lg: list-disc">{t("Academic.functions.4")}</li>
            <li className="lg: list-disc">{t("Academic.functions.5")}</li>
            <li className="lg: list-disc">{t("Academic.functions.6")}</li>
            <li className="lg: list-disc">{t("Academic.functions.7")}</li>
            <li className="lg: list-disc">{t("Academic.functions.8")}</li>
            <li className="lg: list-disc">{t("Academic.functions.9")}</li>
            <li className="lg: list-disc">{t("Academic.functions.10")}</li>
            <li className="lg: list-disc">{t("Academic.functions.11")}</li>
            <li className="lg: list-disc">{t("Academic.functions.12")}</li>
          </ul>

          <h3 className="lg: my-4 text-center font-bold text-Sycamore">
            {t("Academic.examples.title")}
          </h3>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="lg: list-disc">{t("Academic.examples.1")}</li>
            <li className="lg: list-disc">{t("Academic.examples.2")}</li>
            <li className="lg: list-disc">{t("Academic.examples.3")}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
