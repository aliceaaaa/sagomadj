import cn from "classnames";

import { FlexProps } from "../Flex";

import styles from "./section.module.scss";

interface Props extends FlexProps {
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ bordered, className, children, ...other }: Props) => (
  <div
    className={cn(styles.section, className, { [styles.bordered]: bordered })}
    {...other}
  >
    {children}
  </div>
);
