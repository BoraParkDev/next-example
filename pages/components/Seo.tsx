import Head from "next/head";
import React from "react";

export type SeoProps = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function Seo({ title, description, image, url }: SeoProps) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Head>
  );
}
