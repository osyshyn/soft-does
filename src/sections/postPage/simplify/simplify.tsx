import { Number01 } from "@shared/assets/icons/blog/01";
import { Number02 } from "@shared/assets/icons/blog/02";
import { Number03 } from "@shared/assets/icons/blog/03";

import s from "./simplify.module.scss";

const numberIcons = [Number01, Number02, Number03];

interface Step {
  stepTitle?: string;
  stepDescription?: string;
}

interface SimplifyProps {
  title: string;
  steps: Step[];
}

export const Simplify = ({ title, steps }: SimplifyProps) => {
  return (
    <section className={s.root}>
      <div>
        <h2>{title}</h2>
        <ul>
          {Array.isArray(steps) && steps.length > 0 ? (
            steps.map((step, index) => {
              const Icon = numberIcons[index] || null;
              return (
                <li key={index}>
                  <div className={s.number}>
                    {Icon && <Icon />}
                    <p>{step.stepTitle || ''}</p>
                  </div>
                  <div></div>
                  <p>{step.stepDescription || ''}</p>
                </li>
              );
            })
          ) : (
            <li>No steps found.</li>
          )}
        </ul>
      </div>
    </section>
  );
};
