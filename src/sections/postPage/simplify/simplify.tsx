import { Number01 } from "@shared/assets/icons/blog/01";
import { Number02 } from "@shared/assets/icons/blog/02";
import { Number03 } from "@shared/assets/icons/blog/03";

import s from "./simplify.module.scss";

export const Simplify = () => {
  return (
    <section className={s.root}>
      <div>
        <h2>Simplify the way your website gets done</h2>
        <ul>
          <li>
            <div className={s.number}>
              <Number01 />
              <p>Submit your request</p>
            </div>
            <div></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>
          <li>
            <div className={s.number}>
              <Number02 />
              <p>Your website gets to work</p>
            </div>
            <div></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>
          <li>
            <div className={s.number}>
              <Number03 />
              <p>You’ve got a website</p>
            </div>
            <div></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
