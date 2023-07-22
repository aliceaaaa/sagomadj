import cn from "classnames";

import styles from "./button.module.scss";

export const Button = ({
  caption,
  className,
}: {
  caption: string;
  className?: string;
}) => <button className={cn(styles.button, className)}>{caption}</button>;
