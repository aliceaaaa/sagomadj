import { ArrowLink, Button, Ellipse, Flex, Section } from "../../Components";

import styles from "./support.module.scss";

export const Support = () => (
  <Section direction="column" bordered>
    <div className={styles.header}>
      <Ellipse>support Ukraine</Ellipse>
      <Ellipse>important now</Ellipse>
    </div>
    <Flex className={styles.caption}>
      at this moment war goes on
      <br />
      and people are dying
    </Flex>
    <Flex className={styles.foooter} align="center" gap={30}>
      <Button caption="Support" />
      <ArrowLink href="http://google.com" text="what’s happening?" />
    </Flex>
  </Section>
);
