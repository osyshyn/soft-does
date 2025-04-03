import Consulting1 from "@assets/images/expertise/consulting1.png";
import Consulting2 from "@assets/images/expertise/consulting2.png";

import s from "./consulting.module.scss";
import Image from "next/image";

export const Consulting = () => {
  return (
    <section className={s.root}>
      <h2 className={s.visuallyHidden}>.</h2>
      <div className={s.container}>
        <div className={s.block}>
          <div>
            <h3> IT consulting and digital advisory </h3>
            <p>
              “Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an
              effective development team in no time and perform as expected.”
            </p>
          </div>
          <Image aria-hidden alt="" src={Consulting1.src} height={Consulting1.height} width={Consulting1.width} />
        </div>
        <div className={s.block}>
          <Image aria-hidden alt="" src={Consulting2.src} height={Consulting2.height} width={Consulting2.width} />
          <div>
            <h3> IT consulting and digital advisory </h3>
            <p>
              “Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they’ve been able to staff an
              effective development team in no time and perform as expected.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
