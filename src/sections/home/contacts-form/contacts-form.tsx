import data from '@texts/main/index.json';
import s from './contacts-form.module.scss';
import { Input } from '@shared/ui/input/input';
import { Clip } from '@shared/assets/icons/clip';

export const ContactsForm = () => (
  <section className={s.root}>
    <div className={s.formWrapper}>
      <h2 className={s.title}>{data.contactsForm.title}</h2>
      <form>
        <div className={s.inputWrapper}>
          <Input
            type="text"
            id="contactsName"
            label={data.contactsForm.form.name.title}
            required
          />
          <Input
            type="email"
            id="contactsEmail"
            label={data.contactsForm.form.email.title}
            required
          />
          <Input
            type="text"
            id="contactsCompany"
            label={data.contactsForm.form.company.title}
          />
          <Input
            type="tel"
            id="contactsNumber"
            label={data.contactsForm.form.number.title}
          />
        </div>

        <Input
          id="contactsText"
          label={data.contactsForm.form.textField.title}
          isTextarea={true}
          className={s.textarea}
        />

        <div className={s.fileWrapper}>
          <input type="file" className={s.fileInput} id="contactsFiles" />
          <label htmlFor="contactsFiles" className={s.fileLabel}>
            <Clip className={s.clipIcon} />
            {data.contactsForm.form.file.title}
          </label>
          <p className={s.fileFormats}>{data.contactsForm.form.file.formats}</p>
        </div>

        <div className={s.checkboxWrapper}>
          <Input
            type="checkbox"
            id="privacy"
            required
            label={
              <span className={s.checkboxText}>
                {data.contactsForm.form.privacyPolicy.text}
              </span>
            }
            className={s.privacy}
          />

          <Input
            type="checkbox"
            id="updates"
            label={
              <span className={s.checkboxText}>
                {data.contactsForm.form.updates.text}
              </span>
            }
            className={s.privacy}
          />
        </div>

        <button className={s.formButton} type="submit">
          {data.contactsForm.buttonText}
        </button>
      </form>
    </div>

    <div className={s.calendarWrapper}>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3sB_KYTTrfH7CUzWif0DRNvoWkUt-w4ORDnU2gg4opC-uJAPb0FCiFNjcoNO9Y0cZyYEad2Jz1?gv=true"
        style={{ border: 0, backgroundColor: '#fff' }}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  </section>
);
