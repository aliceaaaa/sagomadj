import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./button.module.scss";

interface Props extends ButtonHTMLAttributes<any> {
  caption: string;
  className?: string;
}

export const Button = ({ caption, className }: Props) => (
  <button className={cn(styles.button, className)}>{caption}</button>
);
