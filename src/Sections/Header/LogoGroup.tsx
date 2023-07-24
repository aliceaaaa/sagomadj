import { Flex, WhiteText } from "../../Components";
import { Logo, Stamp } from "../../svg";

import styles from "./style.module.scss";

function LogoGroup() {
  return (
    <Flex align="center" className={styles.logoGroup}>
      <Logo />
      <Stamp className={styles.stamp} />
      <Flex gap={6} className={styles.stampText}>
        Currently in
        <WhiteText>Georgia</WhiteText>
      </Flex>
    </Flex>
  );
}

export default LogoGroup;
