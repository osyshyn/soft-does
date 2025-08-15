import data from "@texts/main/index.json";

// import dynamic from "next/dynamic";

// const Spline = dynamic(() => import("@shared/ui/spline"), {
//   ssr: false,
//   loading: () => null,
// });

import s from "./hero.module.scss";
import clsx from "clsx";
import { Kansas } from "@shared/components/kansas/kansas";
import { HubSpotMeetings } from "@shared/components/hub-spot-meetings";

export const Hero = () => {
  return (
    <section className={clsx(s.wrapper, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <div className={s.content}>
          <Kansas />
          <h1 className={s.title}>{data.hero.title}</h1>

          <HubSpotMeetings>{data.hero.buttonText}</HubSpotMeetings>

          {/* <div>
            <button className={s.button}>{data.hero.buttonText}</button>
          </div> */}
        </div>

        {/* <div className={s.main_image}>
          <Spline scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode" />
        </div> */}
      </div>
    </section>
  );
};
