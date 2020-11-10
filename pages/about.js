import { Box, Text, Grid } from "theme-ui";
import Image from "next/image";

import Hero from "../components/Hero";
import Container from "../components/Container";
import NormalText from "../components/NomalText";

const About = () => (
  <Container>
    <Box mt={[5, 6]} mb={0}>
      <Hero title="About">
        <Text variant="small">Programmer. Designer. Maker.</Text>
        <Text variant="small">Born in 93.</Text>
      </Hero>
    </Box>
    <Box my={[2, 3]}>
      <NormalText>I'm Diogo.</NormalText>
      <NormalText>I'm programmer who loves design.</NormalText>
      <NormalText>
        I’m currently writting this from London, but I live most of my time in
        Braga & Apúlia, both places are in the north of Portugal.
      </NormalText>
      <NormalText>
        I like to build things and I'm currently working on a big idea.
      </NormalText>
      <NormalText>
        Tools that I like to use: Notebooks, Ruby, Javascript, Figma, VSCode,
        Hey, Notion, books.
      </NormalText>
    </Box>
    <Box my={[4, 5]}>
      <Box my={[2, 3]}>
        <Image
          src="/images/about/diogo-costas.jpg"
          alt="Diogo enjoying the view in Fafe."
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </Box>
      <Grid gap={[2, 3]} columns={"1fr 1fr"}>
        <Image
          src="/images/about/diogo-porto.jpg"
          alt="Diogo smiling in a coffeeshop in Porto"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
        <Image
          src="/images/about/diogo-lake.jpg"
          alt="Diogo enjoying the view in Vilamoura."
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </Grid>
    </Box>
  </Container>
);

export default About;
