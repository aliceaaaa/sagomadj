import { SyntheticEvent, useState } from "react";
import cn from "classnames";

import { WHITE_COLOR, outerLinks } from "../../constants";
import { Plus } from "../../svg";
import { ArrowLink, Flex } from "../../Components";

import styles from "./style.module.scss";

function AnchorGroup(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showLinks = (e: SyntheticEvent): void => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <Flex gap={40} className={styles.anchorGroup}>
      {visible &&
        outerLinks.map(({ text, href }) => (
          <ArrowLink text={text} key={text} href={href} />
        ))}
      <a
        href="ds"
        onClick={showLinks}
        style={visible || isHovered ? { color: WHITE_COLOR } : {}}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Links
        <Plus
          className={cn({
            [styles.whiteIcon]: isHovered,
            [styles.transformedIcon]: visible,
          })}
        />
      </a>
      <a href="as">Works</a>
      <a href="as">Shop</a>
    </Flex>
  );
}

export default AnchorGroup;
