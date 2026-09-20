import React from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation("services");

  return (
    <>
      <h1 className="text-center text-Atlantis">{t("title")}</h1>

      <section className="m-auto my-12 grid w-[90%] gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <h2 className="bg-Sycamore p-3 text-center font-bold text-White">
            {t("title2")}
          </h2>

          <ul className="bg-Atlantis p-3 text-White">
            <li className="border-b border-White/20 p-3">{t("s1")}</li>

            <li className="border-b border-White/20 p-3">{t("s2")}</li>

            <li className="border-b border-White/20 p-3">{t("s3")}</li>

            <li className="border-b border-White/20 p-3">{t("s4")}</li>

            <li className="border-b border-White/20 p-3">{t("s5")}</li>

            <li className="p-3">{t("s6")}</li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md">
          <h2 className="bg-Sycamore p-3 text-center font-bold text-White">
            {t("title3")}
          </h2>

          <ul className="bg-Atlantis text-White">
            <li className="border-b border-White/20 p-3">{t("r1")}</li>

            <li className="border-b border-White/20 p-3">{t("r2")}</li>

            <li className="border-b border-White/20 p-3">{t("r3")}</li>

            <li className="border-b border-White/20 p-3">{t("r4")}</li>

            <li className="border-b border-White/20 p-3">{t("r5")}</li>

            <li className="border-b border-White/20 p-3">{t("r6")}</li>

            <li className="border-b border-White/20 p-3">{t("r7")}</li>

            <li className="border-b border-White/20 p-3">{t("r8")}</li>

            <li className="border-b border-White/20 p-3">{t("r9")}</li>

            <li className="p-3">{t("r10")}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
