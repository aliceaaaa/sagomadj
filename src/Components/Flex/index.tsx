import cn from "classnames";

import styles from "./flex.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "end" | "center";
  direction?: "row" | "column";
  justify?: "start" | "end" | "center" | "between" | "around";
  gap?: 4 | 8 | 12 | 16 | 24 | number;
  fullWidth?: boolean;
}

export const Flex: React.FC<Props> = ({
  className,
  align = "start",
  justify = "start",
  direction = "row",
  gap,
  fullWidth,
  style,
  ...other
}) => {
  const classes = cn(
    className,
    styles.flex,
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`direction-${direction}`],
    { [styles.fullWidth]: fullWidth }
  );
  const flexStyle = { gap, ...style };

  return <div className={classes} style={flexStyle} {...other} />;
};
