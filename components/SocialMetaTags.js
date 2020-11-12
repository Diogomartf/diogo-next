import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const SocialMetaTags = ({
  twitterHandle = "@diogomartf",
  image = "/images/social/social.png",
  title = "Diogo Ferreira | Programmer. Thinker.",
  description = "Curious thoughts on how to live. How to build products, code and design.",
}) => {
  const router = useRouter();

  const page = `${process.env.DOMAIN}${router.asPath}`;
  const imagePath = `${process.env.DOMAIN}${image}`;

  return (
    <Head>
      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter-card"
      />
      <meta
        name="twitter:creator"
        content={twitterHandle}
        key="twitter-handle"
      />
      <meta name="twitter:image" content={imagePath} key="twitter-image" />

      {/* Open Graph */}
      <meta property="og:url" content={page} key="og-url" />
      <meta property="og:image" content={imagePath} key="og-image" />
      <meta
        property="og:site_name"
        content="Diogo Ferreira"
        key="og-site-name"
      />
      <meta property="og:title" content={title} key="og-title" />
      {description && (
        <meta property="og:description" content={description} key="og-desc" />
      )}
    </Head>
  );
};

export default SocialMetaTags;
