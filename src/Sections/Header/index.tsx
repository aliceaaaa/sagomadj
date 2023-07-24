import { Flex } from "../../Components";
import AnchorGroup from "./AnchorGroup";
import LogoGroup from "./LogoGroup";

import styles from "./style.module.scss";

export const Header = () => (
  <Flex align="center" justify="between" className={styles.header}>
    <div className={styles.bg} />
    <LogoGroup />
    <AnchorGroup />
  </Flex>
);
