import { Logo, Stamp } from "../../svg";

import styles from "./style.module.scss";

function LogoGroup() {
  return (
    <div className={styles.logoGroup}>
      <Logo />
      <Stamp className={styles.stamp} />
      <div className={styles.stampText}>
        <div className={styles.stampText_grey}>Currently in</div>
        <div className={styles.stampText_white}>Georgia</div>
      </div>
    </div>
  );
}

export default LogoGroup;
