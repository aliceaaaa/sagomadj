import styles from "./grid.module.scss";

export const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.grid}>{children}</div>
);
