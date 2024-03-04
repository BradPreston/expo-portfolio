import Head from "expo-router/head";

interface HeadProps {
  title: string;
  meta?: Meta[];
}

type Meta = {
  name: string;
  content: string;
}

export function HeadComponent({ title, meta }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
      {meta?.map(({ name, content}) => <meta name={name} content={content} />)}
    </Head>
  )
}