import cn from "classnames";

import { Flex } from "..";

import styles from "./ellipse.module.scss";

interface Props {
  dark?: boolean;
  rotate?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Ellipse = ({ dark, rotate, className, children }: Props) => (
  <Flex
    gap={8}
    className={cn(styles.ellipse, className, {
      [styles.rotate]: rotate,
      [styles.dark]: dark,
    })}
  >
    {children}
  </Flex>
);
