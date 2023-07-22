import { useContext } from "react";

import SnackbarContext from "./context";

import styles from "./snackbar.module.scss";
import { Arrow } from "../../svg";
import { Flex } from "../Flex";

export const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);

  return (
    <div className={styles.container}>
      <Flex align="center" gap={8} className={styles.label}>
        <Arrow color="green" />
        {snackbarCtx?.msg}
        <Arrow color="green" />
      </Flex>
    </div>
  );
};
