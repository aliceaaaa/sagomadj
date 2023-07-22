import { InputHTMLAttributes, useState } from "react";
import cn from "classnames";

import { Ellipse } from "../Ellipse";
import { Dots } from "../Loader";

import styles from "./text.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  title?: string;
  loading?: boolean;
  className?: string;
};

export const Text = ({ title, className, loading, ...other }: Props) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.wrapper}>
      <input
        id="text"
        disabled={loading}
        className={cn(styles.text, className)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...other}
      />
      {title && (
        <Ellipse
          dark={!focus}
          className={cn(styles.title, { [styles.active]: focus })}
        >
          {title}
        </Ellipse>
      )}
      {loading && <Dots className={styles.loader} />}
    </div>
  );
};
