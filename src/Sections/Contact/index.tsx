import { SyntheticEvent, useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Flex, SnackbarContext, Text } from "../../Components";
import { CircleDot } from "../../svg";

import styles from "./contact.module.scss";

export const Contanct = () => {
  const form = useRef<HTMLFormElement>(null);

  const snackbarCtx = useContext(SnackbarContext);

  const [loading, setLoading] = useState(false);

  const sendEmail = (e: SyntheticEvent) => {
    setLoading(true);

    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        snackbarCtx?.displayMsg("Your message was successfully sent");
      })
      .catch(() => {
        snackbarCtx?.displayMsg("Something went wrong. Please, try again");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Flex direction="column" gap={42} className={styles.contact}>
      <Flex gap={140} align="center">
        <Flex align="center" className={styles.caption}>
          any inquiries
        </Flex>
        <Flex justify="center" direction="column" className={styles.desc}>
          <Flex gap={4} align="center">
            projects <CircleDot /> collabs <CircleDot />
          </Flex>
          <Flex gap={4} align="center">
            just say hello <CircleDot />
          </Flex>
        </Flex>
      </Flex>

      <form className={styles.form} ref={form} onSubmit={sendEmail} action="#">
        <Text
          title="name"
          autoFocus
          name="name"
          type="text"
          required
          loading={loading}
        />
        <Text
          title="email"
          name="email"
          type="email"
          required
          loading={loading}
        />
        <Text title="comments" name="comments" required loading={loading} />
        <input type="submit" hidden disabled={loading} />
      </form>
    </Flex>
  );
};
