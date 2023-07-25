import { useContext } from "react";
import * as Sections from "./Sections";
import { Snackbar, SnackbarContext } from "./Components";

import styles from "./app.module.scss";
import "./fonts.css";

export const isMobile = window.innerWidth <= 400;
export const isTablet = window.innerWidth > 400 && window.innerWidth <= 900;
export const isMinified = isMobile || isTablet;

export const App = () => {
  const snackbarCtx = useContext(SnackbarContext);

  return (
    <div className={styles.app}>
      <Sections.Header />
      <Sections.Main />
      <Sections.Carousel />
      <Sections.Store />
      <Sections.Support />
      <Sections.Contanct />
      <Sections.Footer />
      {snackbarCtx?.isDisplayed && <Snackbar />}
    </div>
  );
};
