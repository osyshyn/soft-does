import data from "@texts/main/index.json";

// import dynamic from "next/dynamic";

// const Spline = dynamic(() => import("@shared/ui/spline"), {
//   ssr: false,
//   loading: () => null,
// });

const SplineProvider = React.lazy(() => import("@splinetool/react-spline"));

// import { SplineProvider } from "@shared/ui/spline";

import s from "./hero.module.scss";
import clsx from "clsx";
import { Kansas } from "@shared/components/kansas/kansas";
import { useNoContacts } from "providers/NoContactProvider";
import React, { Suspense } from "react";

export const Hero = () => {
  const { noContacts } = useNoContacts();

  const handleClick = () => {
    const contactsForm = document.getElementById("contacts");
    if (contactsForm) {
      contactsForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <Kansas />
          <h1 className={s.title}>{data.hero.title}</h1>
          <div>
            {!noContacts && (
              <button onClick={handleClick} className={s.button}>
                {data.hero.buttonText}
              </button>
            )}
          </div>
        </div>

        <div className={s.main_image}>
          <Suspense fallback={null}>
            <SplineProvider scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
