import { Ellipse, Flex, Grid, WhiteText } from "../../Components";
import { Arrow, ArrowHorizontal, CircleDot } from "../../svg";
import { ScrollDirectionType } from "./types";

import styles from "./carousel.module.scss";

const Section = ({ children }: { children: React.ReactNode }) => (
  <Flex direction="column" gap={24}>
    {children}
  </Flex>
);

interface HeaderProps {
  scrollToNext: (direction: ScrollDirectionType) => void;
}

export const Header = ({ scrollToNext }: HeaderProps) => (
  <Grid>
    <Section>
      <Ellipse>SELECTED WORKS</Ellipse>
      <Flex direction="column" style={{ alignSelf: "center" }}>
        <Flex gap={4} align="center">
          identity <CircleDot color="#fff" /> 3D <CircleDot color="#fff" />
          motion
        </Flex>
        <Flex gap={4} align="center">
          WEB <CircleDot color="#fff" /> ui/ux <CircleDot color="#fff" />
          product
        </Flex>
      </Flex>
    </Section>
    <Section>
      <Flex direction="column" gap={24} style={{ alignSelf: "flex-end" }}>
        <Ellipse rotate>
          2019 <Arrow /> <WhiteText>Now</WhiteText>
        </Ellipse>
        <div>
          shots from my work
          <br />
          experience & personal
          <br />
          projects
          <br />
        </div>
      </Flex>
    </Section>
    <Section>
      <Flex direction="column" gap={24} style={{ alignSelf: "flex-end" }}>
        <Flex gap={10} className={styles.arrows}>
          <ArrowHorizontal onClick={() => scrollToNext("backward")} />
          <ArrowHorizontal onClick={() => scrollToNext("forward")} />
        </Flex>
      </Flex>
    </Section>
  </Grid>
);
