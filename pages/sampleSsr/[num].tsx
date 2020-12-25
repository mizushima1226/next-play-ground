import Head from "next/head";

import Layout from '../../components/Layout';
import { Title } from '../../components/Title';

import { ROOT_URL } from '../../utils/const';

const temp = [
  "https://cdn.lgtmoon.dev/images/111074",
  "https://cdn.lgtmoon.dev/images/3162"
];

type Props = {
  num: number;
};

const SampleSsr = (props: Props) => {
  const { num } = props;

  return (
    <Layout>
      <Head>
        <title>今日のコレスル</title>
        <meta name="description" content="Helmet application" />
        <meta property="og:title" content="コレスル" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ROOT_URL} />
        <meta property="og:image" content={temp[num]} />
        <meta property="og:site_name" content="sample-ogp" />
        <meta property="og:description" content="今日の「コレスル」をシェアしよう！" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Title>This is Sample SSR OGP</Title>
      <div>
        <a href={`http://twitter.com/share?url=${ROOT_URL}/sampleSsr/${num}&text=今日のコレスル&hashtags=コレスル`} target="_blank">ツイート</a>
      </div>
      <img src={temp[num]} />
    </Layout>
  )
};

export default SampleSsr;

export const getServerSideProps = async (context: any) => {
  const { num } = context.params;
  return{
    props:{
      num
    }
  }
};