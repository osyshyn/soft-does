import { Node } from "@shared/assets/icons/main/node";
import { C } from "@shared/assets/icons/technologies/c-plus";
import { Html } from "@shared/assets/icons/technologies/html";
import { Django } from "@shared/assets/icons/technologies/django";
import { Python } from "@shared/assets/icons/technologies/python";
import { Js } from "@shared/assets/icons/technologies/js";
import { Angular } from "@shared/assets/icons/technologies/angular";
import { Vue } from "@shared/assets/icons/technologies/vue";
import { Swift } from "@shared/assets/icons/technologies/swift";
import { Java } from "@shared/assets/icons/technologies/java";
import { Ktln } from "@shared/assets/icons/technologies/ktln";
import { Flutter } from "@shared/assets/icons/technologies/flutter";
import { N } from "@shared/assets/icons/technologies/N";
import { Obj } from "@shared/assets/icons/technologies/obj";
import { React } from "@shared/assets/icons/technologies/react";

import s from "./technologies.module.scss";

const TECHNOLOGIES = [Node, C, Html, Django, Python, Js, Angular, Vue, Swift, Java, Ktln, Flutter, N, Obj, React];

export const Technologies = () => {
  return (
    <section className={s.root}>
      <h2 className={s.title}>Technologies we work with </h2>
      <ul>
        {TECHNOLOGIES.map((Item, index) => (
          <li key={index}>
            <Item className={s.icon}></Item>
          </li>
        ))}
      </ul>
    </section>
  );
};
