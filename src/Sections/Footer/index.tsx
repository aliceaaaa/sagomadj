import { ArrowLink, Ellipse, Flex } from "../../Components";
import { outerLinks } from "../../constants";

import styles from "./footer.module.scss";

export const Footer = () => (
  <div className={styles.footer}>
    <Flex align="center" gap={57}>
      <Ellipse>Links</Ellipse>
      <ArrowLink text="ora@sagomadj.com" href="" isEmail />
    </Flex>
    <Flex align="center" justify="end" gap={40}>
      {outerLinks.map(({ text, href }) => (
        <ArrowLink text={text} key={text} href={href} />
      ))}
      <Ellipse>2022</Ellipse>
    </Flex>
  </div>
);
