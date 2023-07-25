import { useContext } from "react";

import * as CONST from "../../constants";
import SnackbarContext from "./context";

import { Arrow } from "../../svg";
import { Flex } from "../Flex";

import styles from "./snackbar.module.scss";

export const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);

  return (
    <div className={styles.container}>
      <Flex align="center" gap={8} className={styles.label}>
        <Arrow color={CONST.GREEN_COLOR} />
        {snackbarCtx?.msg}
        <Arrow color={CONST.GREEN_COLOR} />
      </Flex>
    </div>
  );
};
