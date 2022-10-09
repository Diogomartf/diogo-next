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
        <div className="text-sm text-grayish">A few things about me.</div>
      </Hero>
    </Spacy>
    <div className="my-3 md:my-4">
      <NormalText>
        I'm Diogo. I'm a portuguese programmer and designer.
      </NormalText>
      <NormalText>
        Co-founder of <a href="https://gymious.pt/">Gymious</a>, a portuguese
        gyms marketplace. Also been involved in web3, co-created a NFT
        collectible, <a href="https://funky.pizza/">Funky Pizza</a>, and I'm
        also a contributor to DXdao.
      </NormalText>
      <NormalText>
        I'm curious. I really love the freedom to think loosely. My best ideas
        come when I'm not constrained.
      </NormalText>
      <NormalText>
        I like to walk. I enjoy sunny days. Afternoons in the park.
      </NormalText>
      <NormalText>I love being around nature. I love fireplaces.</NormalText>
    </div>
    <Spacy>
      <div className="grid grid-cols-2 gap-2 md:gap-3">
        <Image
          objectFit="cover"
          src="/images/about/ceu.jpg"
          alt="apulia lusco-fusco"
          width="100%"
          height="100%"
          layout="responsive"
        />
        <Image
          objectFit="cover"
          src="/images/about/diogo-camisa.jpg"
          alt="Diogo com a camisa verde"
          width="100%"
          height="100%"
          layout="responsive"
        />
        <Image
          width="100%"
          height="100%"
          src="/images/about/pizza.jpg"
          alt="pizza albufeira"
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/images/about/tree.jpg"
          alt="Special tree in Guia"
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/images/about/colombia.jpg"
          alt="Diogo in La Calendelaria"
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/images/about/rose.jpg"
          alt="Rose cafe in Ericeira"
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
        />

        <Image
          src="/images/about/chair.jpg"
          alt="Coffee and drafts in London"
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/images/about/conf.jpg"
          alt="Infinite Hackthon"
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/images/about/beach.jpg"
          alt="S.Rafael beach in Algarve"
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
        />
        <Image
          src="/images/about/car.jpg"
          alt="Diogo in the passenger seat"
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
