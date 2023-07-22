import { SyntheticEvent, useState } from "react";
import classNames from "classnames";

import { outerLinks } from "../../constants";
import { Plus } from "../../svg";
import { ArrowLink } from "../../Components";

import styles from "./style.module.scss";

function AnchorGroup(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showLinks = (e: SyntheticEvent): void => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <div className={styles.anchorGroup}>
      {visible &&
        outerLinks.map((link) => <ArrowLink text={link} key={link} href="" />)}
      <a
        href="ds"
        onClick={showLinks}
        style={{ color: visible || isHovered ? "#FFFFFF" : "#8E8E8E" }}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Links
        <Plus
          className={classNames({
            [styles.whiteIcon]: isHovered,
            [styles.transformedIcon]: visible,
          })}
        />
      </a>
      <a href="as">Works</a>
      <a href="as">Shop</a>
    </div>
  );
}

export default AnchorGroup;
