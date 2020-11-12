import { Box, Text, Grid } from "theme-ui";
import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero";
import Container from "../components/Container";
import NormalText from "../components/NomalText";

const About = () => (
  <Container>
    <Head>
      <title>{`About | Diogo Ferreira`}</title>
    </Head>
    <Box mt={[5, 6]}>
      <Hero title="About">
        <Text variant="small">Curious. Stubborn. Talktive.</Text>
        <Text variant="small">Born in 93.</Text>
      </Hero>
    </Box>
    <Box my={[3, 4]}>
      <NormalText>
        I'm Diogo. I'm a portuguese programmer and (aspiring) designer. I’m
        currently writing this from London but I live most of my time between
        Braga and Apúlia, both in the north of Portugal. I recently quit my job
        to follow my dream of buiding a company.
      </NormalText>
      <NormalText>
        I like to think of myself as curious. I'm always interested in
        something, be it computers, programming, designing or mind related
        stuff. How we think. How we behave. Why we do certain things. And how we
        end up in certain mental conditions. Reflecting and acting on this
        helped me overcome my worst times and made space for my best times.
      </NormalText>
      <NormalText>
        I really love the freedom to think loosely. My best ideas come when I'm
        not constrained.
      </NormalText>
      <NormalText>
        I get most of my knowledge by reading books. Also talking to people.
        Everyone can teach us something. I'm very lucky that I have handful of
        smart people in my life (thank you!). Also doing different things or
        doing things differently, helps me think different.
      </NormalText>
      <NormalText>
        I like to walk. I also enjoy sunny days. Getting vitamin D improves my
        mood. I like to watch the sunset. I like to watch the stars in a dark
        sky and wonder about the infinite.
      </NormalText>
      <NormalText>
        Some of my secret mood boosters are waking up without an alarm, but also
        doing a workout, sometimes in the gym other times outdoors.
      </NormalText>
      <NormalText>
        My favourite way to socialize is around the fireplace, call me old
        school, but there are few things better than talking while warm, relaxed
        and amused by the fire. In the summer I like to be in the mountains or
        near the river or the sea.
      </NormalText>
      <NormalText>
        Work wise, I'm a fan of remote working. It gives more freedom to work,
        and I'm all in on that. In my experience the best work happens outside
        of the work schedule. I believe that small driven teams can accomplish a
        lot. Also that software is eating the world.
      </NormalText>
      <NormalText>Some pictures of my 27 years old self 👇️</NormalText>
    </Box>
    <Box my={[4, 5]}>
      <Box my={[2, 3]}>
        <Image
          objectFit="cover"
          src="/images/about/diogo-camisa.jpg"
          alt="Diogo enjoying the view in Fafe."
          width="100%"
          height="100%"
          layout="responsive"
        />
      </Box>
      <Grid gap={[2, 3]} columns="1fr 1fr">
        <Image
          width="100%"
          height="100%"
          src="/images/about/diogo-at-sunset.jpg"
          alt="Diogo at the sunset in Aveiro."
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/images/about/diogo-costas.jpg"
          alt="Diogo enjoying the view in Fafe"
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
        />
      </Grid>
    </Box>
  </Container>
);

export default About;
