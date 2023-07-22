import { useContext } from "react";
import * as Section from "./Sections";
import { Snackbar, SnackbarContext } from "./Components";

import styles from "./app.module.scss";
import "./fonts.css";

export const App = () => {
  const snackbarCtx = useContext(SnackbarContext);

  return (
    <div className={styles.app}>
      <Section.Header />
      <Section.Main />
      <Section.Carousel />
      <Section.Store />
      <Section.Support />
      <Section.Contanct />
      <Section.Footer />
      {snackbarCtx?.isDisplayed && <Snackbar />}
    </div>
  );
};
