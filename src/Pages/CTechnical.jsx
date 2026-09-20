import React from "react";
import Logo from "../Assets/IMGS/logo.png";
import { useTranslation } from "react-i18next";

export default function CTechnichal() {
  const { t } = useTranslation("coordinations");
  return (
    <div className="m-auto w-[90%] text-black transition-all duration-500 dark:text-White">
      <h1 className="lg: mb-12 text-center font-bold text-Atlantis">
        {t("Technical.title")}
      </h1>
      <section className="flex grid-cols-2 flex-col gap-12 lg:grid">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo del CTP Santo Domingo" className="w-1/3" />

          <div className="my-4 flex flex-col gap-4">
            <div className="lg: flex items-center justify-center gap-2">
              <i class="fa-solid fa-phone-volume"></i>
              <p>{t("Contact.Technical.phone")}</p>
            </div>

            <div className="lg: my-2 flex items-center justify-center gap-2">
              <i class="fa-solid fa-envelope"></i>
              <p>{t("Contact.Technical.mail")}</p>
            </div>
          </div>

          <h2 className="lg: my-4 font-bold text-Sycamore">
            {t("Technical.subtitle")}
          </h2>
          <p className="lg:">{t("Technical.description")}</p>

          <h2 className="lg: my-4 font-bold text-Sycamore">
            {t("Technical.rules.title")}
          </h2>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="lg: list-disc">{t("Technical.rules.1")}</li>
            <li className="lg: list-disc">{t("Technical.rules.2")}</li>
            <li className="lg: list-disc">{t("Technical.rules.3")}</li>
            <li className="lg: list-disc">{t("Technical.rules.4")}</li>
          </ul>
        </div>
        <div>
          <h2 className="lg: my-4 text-center font-bold text-Sycamore">
            {t("Technical.functions.title")}
          </h2>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="lg: list-disc">{t("Technical.functions.1")}</li>
            <li className="lg: list-disc">{t("Technical.functions.2")}</li>
            <li className="lg: list-disc">{t("Technical.functions.3")}</li>
            <li className="lg: list-disc">{t("Technical.functions.4")}</li>
            <li className="lg: list-disc">{t("Technical.functions.5")}</li>
            <li className="lg: list-disc">{t("Technical.functions.6")}</li>
            <li className="lg: list-disc">{t("Technical.functions.7")}</li>
          </ul>

          <h3 className="lg: my-4 text-center font-bold text-Sycamore">
            {t("Technical.examples.title")}
          </h3>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="lg: list-disc">{t("Technical.examples.1")}</li>
            <li className="lg: list-disc">{t("Technical.examples.2")}</li>
            <li className="lg: list-disc">{t("Technical.examples.3")}</li>
            <li className="lg: list-disc">{t("Technical.examples.4")}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
