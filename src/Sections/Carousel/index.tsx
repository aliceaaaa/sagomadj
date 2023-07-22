import { useRef } from "react";

import { Flex } from "../../Components";
import { Header } from "./Header";
import { Card } from "./Card";
import { ScrollDirectionType } from "./types";

import styles from "./carousel.module.scss";

export const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToNext = (direction: ScrollDirectionType) => {
    if (direction === "forward") {
      const lastChildElement = carouselRef.current?.lastElementChild;
      lastChildElement?.scrollIntoView({ behavior: "smooth" });

      return;
    } else {
      const firstChildElement = carouselRef.current?.firstElementChild;
      firstChildElement?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex direction="column" className={styles.works}>
      <Header scrollToNext={scrollToNext} />
      <div className={styles.carousel} ref={carouselRef}>
        <Card url="../pics/joke/1" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Flex>
  );
};
