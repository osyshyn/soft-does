import data from '@texts/main/index.json';
import s from './contacts.module.scss';
import Link from 'next/link';
import { ArrowUpAndRight } from '@shared/assets/icons/arrow-up-and-right';

export const Contacts = () => (
  <section className={s.root} id="contacts">
    <ul className={s.contactsList}>
      {Object.values(data.contacts).map(item => (
        <li key={item.contact} className={s.listItem}>
          <div className={s.itemContentWrapper}>
            <p className={s.listItemTitle}>{item.title}</p>
            <Link href={item.to} target="_blank" className={s.listItemLink}>
              <p>{item.contact}</p>
              <ArrowUpAndRight className={s.arrowIcon} />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
