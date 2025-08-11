import Head from "next/head";

interface IProps {
  pathname: string;
  title: string;
  description: string;
}

export const SEO: React.FC<IProps> = ({ pathname, title, description }) => (
  <Head>
    <meta name="robots" content="index, follow" />
    <title key="title">{title}</title>
    <meta key="description" name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="msvalidate.01" content="B318AD364B2B8B51BA2CD9973949B158" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={`https://softdoes.com${pathname}`} />
  </Head>
);
