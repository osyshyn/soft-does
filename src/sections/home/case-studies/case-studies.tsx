import data from '@texts/main/index.json';
import s from './case-studies.module.scss';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Mousewheel, Pagination } from 'swiper/modules';

import aiLaptop from '@assets/images/main/ai-laptop.png';
import aiPhone from '@assets/images/main/ai-phone.png';
import aiWebApp from '@assets/images/main/ai-web-app.png';
import architectureLaptop from '@assets/images/main/architecture-laptop.png';
import architecturePhone from '@assets/images/main/architecture-phone.png';
import architectureTablet from '@assets/images/main/architecture-tablet.png';
import cloudServicesPhone from '@assets/images/main/cloud-services-phone.png';
import cloudServicesLaptop from '@assets/images/main/cloud-services-laptop.png';
import dataScienceGirlWithPhone from '@assets/images/main/data-science-girl-with-phone.png';
import dataScienceLaptop from '@assets/images/main/data-science-laptop.png';
import dataScienceWebApp from '@assets/images/main/data-science-web-app.png';
import designLaptop from '@assets/images/main/design-laptop.png';
import designPhone from '@assets/images/main/design-phone.png';
import designTwoPhones from '@assets/images/main/design-two-phones.png';

const PHOTOS = {
  ai: [aiPhone, aiWebApp, aiLaptop],
  'cloud-services': [cloudServicesPhone, cloudServicesLaptop, designTwoPhones],
  'data-science-engineering': [
    dataScienceWebApp,
    dataScienceLaptop,
    dataScienceGirlWithPhone,
  ],
  'architecture-consulting-services': [
    architectureLaptop,
    architecturePhone,
    architectureTablet,
  ],
  'ui-ux-design': [designTwoPhones, designLaptop, designPhone],
};

type Key = keyof typeof PHOTOS;

export const CaseStudies = () => (
  <section className={s.root}>
    <Swiper
      direction={'horizontal'}
      grabCursor={true}
      effect={'creative'}
      mousewheel={true}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['80%', 0, -200],
        },
      }}
      modules={[EffectCreative, Mousewheel, Pagination]}
    >
      <SwiperSlide className={s.firstSlide}>
        <h2 className={s.title}>{data.cases.title}</h2>
      </SwiperSlide>
      {data.cases.list.map(item => (
        <SwiperSlide key={item.id}>
          <li className={s.caseCardRoot}>
            <div className={s.tagsContainer}>
              <ul className={s.mainTags}>
                {item.mainInfo.map(i => (
                  <li key={i} className={s.tagItem}>
                    {i}
                  </li>
                ))}
              </ul>

              <ul className={s.additionalTags}>
                {item.additionalInfo.map(i => (
                  <li key={i} className={s.tagItem}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.mainContentWrapper}>
              <h3 className={s.cardTitle}>{item.title}</h3>

              <ul className={s.photosWrapper}>
                <li
                  className={s.photo}
                  style={{
                    backgroundImage: `url(${PHOTOS[item.id as Key][0].src})`,
                  }}
                />
                <li
                  className={s.photo}
                  style={{
                    backgroundImage: `url(${PHOTOS[item.id as Key][1].src})`,
                  }}
                />
                <li
                  className={s.photo}
                  style={{
                    backgroundImage: `url(${PHOTOS[item.id as Key][2].src})`,
                  }}
                />
              </ul>
            </div>

            <ul className={s.bottomContentWrapper}>
              <li className={s.bottomCardWrapper}>
                <span className={s.tag}>{item.before.tag}</span>

                <h4 className={s.bottomTitle}>
                  <span className={s.titleNumber}>{item.before.number}</span>
                  {item.before.title}
                </h4>

                <p className={s.bottomCardText}>{item.before.text}</p>
              </li>

              <li className={clsx(s.bottomCardWrapper, s.after)}>
                <span className={clsx(s.tag, s.after)}>{item.after.tag}</span>

                <h4 className={clsx(s.bottomTitle, s.after)}>
                  <span className={clsx(s.titleNumber, s.after)}>
                    {item.after.number}
                  </span>
                  {item.after.title}
                </h4>

                <p className={s.bottomCardText}>{item.after.text}</p>
              </li>
            </ul>
          </li>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
