import { useState } from "react";

import * as CONST from "../../constants";
import { Menu } from "../../svg";
import { isMinified } from "../../App";
import { Flex } from "../../Components";

import AnchorGroup from "./AnchorGroup";
import LogoGroup from "./LogoGroup";

import styles from "./style.module.scss";

export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Flex align="center" justify="between" className={styles.header}>
      <div className={styles.bg} />
      <LogoGroup />
      {!isMinified && <AnchorGroup />}
      {isMinified && (
        <div className={styles.menu}>
          <Menu
            onClick={() => setExpanded(!expanded)}
            color={CONST.WHITE_COLOR}
          />
        </div>
      )}
    </Flex>
  );
};
