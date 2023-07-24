import { Flex } from "../../Components";

import styles from "./carousel.module.scss";

export const Card = ({ url, caption }: { url?: string; caption?: string }) => (
  <Flex direction="column" className={styles.card} gap={0}>
    <div
      className={styles.image}
      style={{
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
          ")",
      }}
    ></div>
    <div id="caption" className={styles.caption}>
      Потрясающей красоты клавиатура
    </div>
  </Flex>
);
