import Head from 'next/head';

interface IProps {
  pathname: string;
  title: string;
  description: string;
}

export const SEO: React.FC<IProps> = ({ pathname, title, description }) => (
  <Head>
    <title key="title">{title}</title>
    <meta key="description" name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={`https://soft-does.vercel.app${pathname}`} />
  </Head>
);
