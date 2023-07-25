import { Button } from "../../Components";
import { Section } from "../../Components/Section";
import { ArrowCircle } from "../../svg";

import styles from "./main.module.scss";

export const Main = () => (
  <Section className={styles.main}>
    <div className={styles.picture} />
    <div className={styles.main__grey}>
      hi <ArrowCircle /> it’s sagomadj
    </div>
    <div className={styles.main__white}>
      multidisciplinary designer focused on graphic design
    </div>
    <Button className={styles.hireMe} caption="Hire me" />
  </Section>
);
