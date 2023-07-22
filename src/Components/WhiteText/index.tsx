import styles from "./white.module.scss";

export const WhiteText = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.white}>{children}</div>
);
