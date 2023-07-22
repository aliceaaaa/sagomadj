import AnchorGroup from "./AnchorGroup";
import LogoGroup from "./LogoGroup";

import styles from "./style.module.scss";

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.bg} />
    <LogoGroup />
    <AnchorGroup />
  </div>
);
