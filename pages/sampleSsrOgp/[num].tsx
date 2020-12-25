import Head from "next/head";

import Layout from '../../components/Layout'
import { Title } from '../../components/Title'

const temp = [
  "https://cdn.lgtmoon.dev/images/111074",
  "https://cdn.lgtmoon.dev/images/3162"
]

const url = "https://next-play-ground.vercel.app/sampleSsrOgp";

type Props = {
  num: number;
}

const SampleSsrOgp = (props: Props) => {
  const { num } = props;
  return (
    <Layout>
      <Head>
        <title>mizuタイトル</title>
        <meta name="description" content="Helmet application" />
        <meta property="og:title" content="サンプルOGP" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />Í
        <meta property="og:image" content={temp[num]} />
        <meta property="og:site_name" content="sample-ogp" />
        <meta property="og:description" content="OGPの練習中です。。。" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Title>This is Sample SSR OGP</Title>
      <img src={temp[num]} />
      <a href="http://twitter.com/share?url=https://next-play-ground.vercel.app/helmet/&text=OGPテスト&hashtags=OGP" target="_blank">ツイート</a>
    </Layout>
  )
}

export default SampleSsrOgp;

export const getServerSideProps = async (context: any) => {
  const { num } = context.params;
  return{
    props:{
      num
    }
  }
};