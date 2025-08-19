"use client";
import data from "@texts/main/index.json";
import s from "./contacts-form.module.scss";
import { Input } from "@shared/ui/input/input";
import { Clip } from "@shared/assets/icons/clip";
import { useNoContacts } from "providers/NoContactProvider";

export const HeroContactForm = () => {
  const { noContacts } = useNoContacts();

  if (noContacts) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(event.currentTarget);

    const fileInput = event.currentTarget.querySelector(
      "#contactsFiles"
    ) as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (file) {
      form.append("file", file);
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: form,
    });

    const result = await response.json();
    console.log(result.message);
    formElement.reset();

    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <section className={s.root}>
      <div className={s.formWrapper}>
        <h2 className={s.title}>Your App. The First Version. By Tomorrow.</h2>
        <h5 className={s.subtitle}>
          We’ll design and build the first working version of your app in just
          24 hours — mobile, web, or both.
        </h5>
        <form onSubmit={handleSubmit}>
          <div className={s.inputWrapper}>
            <Input
              type="text"
              id="contactsName"
              name="name"
              label={data.contactsForm.form.name.title}
              required
              className={s.input}
            />
            <Input
              type="email"
              id="contactsEmail"
              name="email"
              label={data.contactsForm.form.email.title}
              required
              className={s.input}
            />
            <Input
              type="text"
              id="contactsCompany"
              name="company"
              label={data.contactsForm.form.company.title}
              className={s.input}
            />
            <Input
              type="tel"
              id="contactsNumber"
              name="number"
              label={data.contactsForm.form.number.title}
              className={s.input}
            />
          </div>

          <Input
            id="contactsText"
            name="message"
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
            <p className={s.fileFormats}>
              {data.contactsForm.form.file.formats}
            </p>
          </div>

          <div className={s.checkboxWrapper}>
            <Input
              type="checkbox"
              id="privacy"
              defaultChecked
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
              defaultChecked
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
    </section>
  );
};
