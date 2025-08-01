import s from "./simplify.module.scss";

interface Step {
  stepNumber: string | number;
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
              return (
                <li key={index}>
                  <div className={s.number}>
                    <p className={s.stepNumber}>{step.stepNumber}</p>
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
