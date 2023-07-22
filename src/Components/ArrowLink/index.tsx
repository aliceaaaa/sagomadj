import { useState } from "react";
import cn from "classnames";

import { Arrow } from "../../svg";

import styles from "./links.module.scss";

interface Props {
  href: string;
  text: string;
  isEmail?: boolean;
  className?: string;
}

export const ArrowLink = ({ href, text, isEmail, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const otherProps = isEmail ? {} : { target: "_blank", rel: "noreferrer" };

  return (
    <a
      href={isEmail ? `mailto:${text}` : href}
      key={text}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(styles.arrowLink, className)}
      {...otherProps}
    >
      {text}
      <div className={styles.iconWrap}>
        <Arrow className={cn({ [styles.icon]: isHovered })} />
      </div>
    </a>
  );
};
