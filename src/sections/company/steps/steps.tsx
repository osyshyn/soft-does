"use client";

import Image from "next/image";

import { Ai } from "@shared/assets/icons/ai";

import js from "@assets/images/company/js1.png";
import nodejs from "@assets/images/company/nodejs.png";
import mongodb from "@assets/images/company/mongodb.png";
import phone from "@assets/images/company/phone.png";
import monitor from "@assets/images/company/monitor.png";
import frame from "@assets/images/company/frame.png";

import s from "./steps.module.scss";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { H2, H6, TextLg, TextMd, TextXl } from "@shared/components/typography";

export const Steps = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={clsx(s.root, "wrapper")}>
      <div className={clsx(s.container, "container")}>
        <H2>Steps in the development of our company </H2>

        <div ref={containerRef} className={s.timelineWrapper}>
          <div className={s.steps}>
            <ul>
              <li>2018</li>
              <li>2019</li>
              <li>2020</li>
              <li>2022</li>
              <li>2023</li>
            </ul>
          </div>

          <motion.div className={s.timelineFill} style={{ scaleY }} />
          <div className={s.timelineBase} />

          <ul className={s.mainList}>
            <li>
              <div className={s.leftBlock}>
                <div className={s.info}>
                  <H6>The Beginning</H6>
                  <div className={s.textDiv}>
                    <TextMd className={s.text}>
                      Our team of highly skilled developers have joined forces
                      to provide premium software development services to our
                      clients. We strived not only to create high-quality code,
                      but also to form partnerships based on trust and mutual
                      understanding.
                    </TextMd>
                    <TextMd className={s.text}>
                      As our first significant task, we implemented a custom web
                      application for a fintech startup. Using JavaScript and
                      Node.js, we created a solution that effectively solved the
                      client&apos;s specific tasks and met the market
                      requirements. This project was not only a test of our
                      competence, but also a starting point for further growth
                      and development of the company.
                    </TextMd>
                  </div>
                </div>
              </div>

              <div className={s.rightBlock}>
                <div className={s.details}>
                  <TextXl className={s.date}>March 2018</TextXl>
                  <div className={s.tools}>
                    <TextXl className={s.detailsTitle}>
                      The tools we used:
                    </TextXl>
                    <ul className={s.workImages}>
                      <li>
                        <Image aria-hidden alt="" src={js} />
                      </li>
                      <li>
                        <Image aria-hidden alt="" src={nodejs} />
                      </li>
                      <li>
                        <Image aria-hidden alt="" src={mongodb} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className={s.rightBlock}>
                <div className={s.details}>
                  <TextXl className={s.date}>September 2019</TextXl>
                  <ul className={s.devices}>
                    <li>
                      <Image aria-hidden alt="" fill src={phone} />
                    </li>
                    <li>
                      <Image aria-hidden alt="" fill src={monitor} />
                    </li>
                    <li>
                      <Image aria-hidden alt="" fill src={phone} />
                    </li>
                  </ul>
                </div>
              </div>

              <div className={s.leftBlock}>
                <div className={s.info}>
                  <H6>Growth and development</H6>
                  <div className={s.textDiv}>
                    <TextMd className={s.text}>
                      During the first year of operation, we successfully closed
                      about 100 projects, which confirmed our ability to quickly
                      adapt to client requests and effectively cope with tasks
                      of varying complexity. This became the basis for our
                      further development and strengthening of our market
                      position.
                    </TextMd>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className={s.leftBlock}>
                <div className={s.info}>
                  <H6>Specialisation</H6>
                  <div className={s.textDiv}>
                    <TextMd className={s.text}>
                      We have become the best in different areas of development
                      by attracting many specialists with expertise in different
                      areas such as web development, mobile applications and
                      data management systems. This diversity of skills has
                      enabled us to offer more comprehensive and innovative
                      solutions to our clients, and strengthen our reputation as
                      a trusted partner in the software development industry.
                    </TextMd>
                  </div>
                </div>
              </div>

              <div className={s.rightBlock}>
                <div className={s.details}>
                  <TextXl className={s.date}>April 2020</TextXl>
                  <div className={s.frame}>
                    <Image
                      aria-hidden
                      alt=""
                      src={frame.src}
                      width={frame.width}
                      height={frame.height}
                    />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className={s.rightBlock}>
                <div className={s.details}>
                  <TextXl className={s.date}>December 2022</TextXl>
                  <div className={s.aiDiv}>
                    <TextLg className={s.detailsTitle}>
                      The first company that started using
                    </TextLg>
                    <Ai className={s.aiIcon} />
                  </div>
                </div>
              </div>

              <div className={s.leftBlock}>
                <div className={s.info}>
                  <H6>AI implementation</H6>
                  <div className={s.textDiv}>
                    <TextMd className={s.text}>
                      Towards the end of the year, we began to work extensively
                      with artificial intelligence, integrating AI solutions
                      into software for our clients. This enabled us to create
                      smarter applications that automate processes and improve
                      user experience, giving companies new opportunities to
                      optimise their business processes.
                    </TextMd>
                    <TextMd className={s.text}>
                      We started developing machine learning algorithms to
                      analyse data and predict user behaviour, enabling our
                      clients to make more informed business decisions. We also
                      introduced chatbots and virtual assistants, which provided
                      24/7 customer support and improved the efficiency of
                      customer interactions. Our team has been actively learning
                      new AI technologies to stay at the forefront of innovation
                      and offer our customers cutting-edge solutions that meet
                      the most relevant market requirements.
                    </TextMd>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className={s.leftBlock}>
                <div className={s.info}>
                  <H6>A successful company</H6>
                  <div className={s.textDiv}>
                    <TextMd className={s.text}>
                      We have travelled a thorny and long road and can now
                      proudly call ourselves the best in our field. Our efforts
                      and commitment to excellence have borne fruit and we have
                      earned the trust of our clients. Thanks to the high
                      quality of our services and personalised approach to each
                      project, we have created reliable partnerships and earned
                      a reputation that has become the key to our success.
                      Today, we continue to grow and develop, striving for new
                      heights and always being one step ahead in the world of
                      technology.
                    </TextMd>
                  </div>
                </div>
              </div>

              <div className={s.rightBlock}>
                <div className={s.details}>
                  <TextXl className={s.date}>October 2023</TextXl>
                  <div className={s.statsDiv}>
                    <TextLg className={s.blockTitle}>
                      Our statistics for this year were
                    </TextLg>
                    <ul className={s.stats}>
                      <li>
                        <TextXl>
                          100<span>+</span>
                        </TextXl>
                        <TextLg>Regular Customers</TextLg>
                      </li>
                      <li>
                        <TextXl>
                          18k<span>+</span>
                        </TextXl>
                        <TextLg>Completed Projects</TextLg>
                      </li>
                      <li>
                        <TextXl>
                          100<span>+</span>
                        </TextXl>
                        <TextLg>Award Winning</TextLg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
