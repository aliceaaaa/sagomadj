import { SyntheticEvent, useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import * as CONST from "../../constants";
import { Button, Flex, SnackbarContext, Text } from "../../Components";
import { CircleDot } from "../../svg";

import styles from "./contact.module.scss";

export const Contanct = () => {
  const form = useRef<HTMLFormElement>(null);

  const snackbarCtx = useContext(SnackbarContext);

  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const sendEmail = (e: SyntheticEvent) => {
    setLoading(true);

    e.preventDefault();

    emailjs
      .sendForm(
        CONST.emailServiceID,
        CONST.emailTemplateID,
        form.current!,
        CONST.publicKey
      )
      .then(() => {
        snackbarCtx?.displayMsg(CONST.messageSuccessStr);
        form.current?.reset();
      })
      .catch(() => {
        snackbarCtx?.displayMsg(CONST.messageFailStr);
      })
      .finally(() => setLoading(false));
  };

  const checkValid = () => {
    setTimeout(() => {
      setIsFormValid(!!form.current?.checkValidity());
    }, 500);
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
          onKeyDown={checkValid}
        />
        <Text
          title="email"
          name="email"
          type="email"
          required
          loading={loading}
          onKeyDown={checkValid}
        />
        <Text
          title="comments"
          name="comments"
          required
          loading={loading}
          onKeyDown={checkValid}
        />
        {isFormValid && (
          <Button type="submit" disabled={loading} caption="send" />
        )}
      </form>
    </Flex>
  );
};
