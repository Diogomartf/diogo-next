import Head from "next/head";
import Image from "next/image";

import SocialMetaTags from "../components/SocialMetaTags";
import Hero from "../components/Hero";
import Container from "../components/Container";
import NormalText from "../components/NomalText";
import Spacy from "../components/Spacy";

const About = () => (
  <Container>
    <Head>
      <title>About | Diogo Ferreira</title>
    </Head>
    <SocialMetaTags
      title="Hey! I'm Diogo"
      image="/images/about/diogo-camisa.jpg"
      description="I'm a portuguese programmer and (aspiring) designer. I like to think of myself as a curious person."
    />
    <Spacy>
      <Hero title="About">
        <div className="text-sm text-grayish">Curious. Stubborn. Talktive.</div>
        <div className="text-sm text-grayish">Born in 93.</div>
      </Hero>
    </Spacy>
    <div className="my-3 md:my-4">
      <NormalText>
        I'm Diogo. I'm a portuguese programmer and designer. I’m currently near
        the beach in Canidelo, Portugal. I recently quit my job to build{" "}
        <a href="https://gymious.pt/">Gymious</a>.
      </NormalText>
      <NormalText>
        I'm curious. I'm always interested in something. Be it computers,
        programming, designing or thinking. I like to notice how I think. How I
        behave. Why I do certain things. And how I end up in certain mental
        conditions. Reflecting and acting on this helped me overcome my worst
        times and made space for my best times.
      </NormalText>
      <NormalText>
        I really love the freedom to think loosely. My best ideas come when I'm
        not constrained.
      </NormalText>
      <NormalText>
        I like to walk. I also enjoy sunny days. Getting vitamin D improves my
        mood. I like to watch the sunset.
      </NormalText>
      <NormalText>
        Some of my secret mood boosters are waking up without an alarm and also
        doing a workout.
      </NormalText>
      <NormalText>
        My favourite way to socialize is around the fireplace. There are few
        things better than talking while warm, relaxed and amused by the fire. I
        love being around nature. I like to be in the mountains or near the
        river or the sea.
      </NormalText>
      <NormalText>
        Work wise, I'm a fan of remote working. It gives more freedom to work,
        and I'm all in on that. In my experience the best work happens outside
        of the work schedule. I believe that small driven teams can accomplish a
        lot. Also that software is eating the world.
      </NormalText>
      <NormalText>Some pictures of my 27 years old self 👇️</NormalText>
    </div>
    <Spacy>
      <div className="my-2 md:my-3">
        <Image
          objectFit="cover"
          src="/images/about/diogo-camisa.jpg"
          alt="Diogo enjoying the view in Fafe."
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-3">
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
      </div>
    </Spacy>
  </Container>
);

export default About;
