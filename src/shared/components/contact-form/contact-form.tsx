"use client";

import data from "@texts/main/index";
import s from "./contact-form.module.scss";
import { Input } from "@shared/ui/input/input";
import { Clip } from "@shared/assets/icons/clip";
import { useNoContacts } from "@shared/providers/no-contact-provider";
import { addDataLayer } from "@shared/utils";
import { usePathname } from "next/navigation";
import { H3, TextLg, TextMd } from "../typography";
import Button from "../buttons";
import { Kansas } from "../kansas/kansas";

interface ContactFormProps {
  title: string;
  subtitle?: string;
  dataLayer?: {
    event: string;
    form_name: string;
    path?: string;
    form_id: string;
  };
}

export const ContactForm = ({
  title,
  subtitle,
  dataLayer,
}: ContactFormProps) => {
  const path = usePathname();
  const { noContacts } = useNoContacts();

  if (noContacts) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
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

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: form,
      });

      await response.json();

      if (response.ok) {
        addDataLayer({
          event: dataLayer?.event || "form_submit",
          form_name: dataLayer?.form_name || "Contact Us",
          path: path,
          form_id: dataLayer?.form_id || "contact-form",
        });
      }

      formElement.reset();

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={s.root}>
      <Kansas />
      <div className={s.formWrapper}>
        <div className={s.titleWrapper}>
          <H3 className={s.title}>{title}</H3>
          <TextLg className={s.subtitle}>{subtitle}</TextLg>
        </div>
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
              <TextLg>{data.contactsForm.form.file.title}</TextLg>
            </label>
            <TextMd className={s.fileFormats}>
              {data.contactsForm.form.file.formats}
            </TextMd>
          </div>

          <div className={s.checkboxWrapper}>
            <Input
              type="checkbox"
              id="privacy"
              defaultChecked
              required
              label={data.contactsForm.form.privacyPolicy.text}
              className={s.privacy}
            />

            <Input
              type="checkbox"
              id="updates"
              defaultChecked
              label={data.contactsForm.form.updates.text}
              className={s.privacy}
            />
          </div>

          <div className={s.button}>
            <Button variant="white" size="lg" type="submit">
              {data.contactsForm.buttonText}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
