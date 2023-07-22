import cn from "classnames";

import styles from "./loader.module.scss";

interface Props {
  className?: string;
}

export const Dots = (props: Props) => (
  <div className={cn(styles.dots, props.className)} />
);
