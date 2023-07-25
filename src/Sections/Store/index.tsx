import { CircleDot, Flower, Planet } from "../../svg";
import { Ellipse, Flex, Grid, Section, WhiteText } from "../../Components";

import styles from "./store.module.scss";

export const Store = () => (
  <Section direction="column" bordered>
    <Grid>
      <Flex direction="column">
        <Ellipse>shop</Ellipse>
      </Flex>
      <Flex direction="column" style={{ justifySelf: "center" }}>
        <WhiteText>stuff from $0</WhiteText>
        <div>online & offline</div>
        <div>shipping to anywhere</div>
      </Flex>
      <Flex direction="column" align="end">
        <Flower />
      </Flex>
    </Grid>
    <div className={styles.cover}>
      <Flex direction="column" className={styles.captions}>
        <Flex gap={5} fullWidth>
          <Ellipse dark>
            <Planet /> shipping worldwide
          </Ellipse>
          <Ellipse dark>online</Ellipse>
          <Ellipse dark>offline</Ellipse>
        </Flex>
        <Flex direction="column" className={styles.items}>
          <Flex gap={4} align="center">
            pictures <CircleDot /> cloth <CircleDot /> cases
          </Flex>
          <Flex gap={4} align="center">
            digital packs <CircleDot /> etc
          </Flex>
        </Flex>
      </Flex>
      <div className={styles.title}>
        sagomadj
        <br /> store
      </div>
    </div>
  </Section>
);
