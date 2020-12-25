import { useState } from "react";
import { Helmet } from "react-helmet";

import Layout from '../components/Layout'
import { Title } from '../components/Title'

import { ROOT_URL } from "../utils/const";

const src1 = "https://cdn.lgtmoon.dev/images/111074";
const src2 = "https://cdn.lgtmoon.dev/images/3162";

const SampleCsr = () => {
  const [flg, setFlg] = useState(true);
  const src = flg ? src1 : src2;

  const onClick = () => setFlg(!flg);

  return (
    <Layout title="ヘルメット">
      <Helmet>
        <title>今日のコレスル</title>
        <meta name="description" content="Helmet application" />
        <meta property="og:title" content="コレスル" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ROOT_URL} />
        <meta property="og:image" content={src} />
        <meta property="og:site_name" content="sample-ogp" />
        <meta property="og:description" content="今日の「コレスル」をシェアしよう！" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Title>Reactヘルメット⛑</Title>
      <div>
        <button type="button" onClick={onClick}>Change!</button>
        <a href={`http://twitter.com/share?url=${ROOT_URL}/sampleCsr/&text=今日のコレスル&hashtags=コレスル`} target="_blank">ツイート</a>
      </div>
      <img src={src} alt="" width="300" height="300" />
    </Layout>
  )
}

export default SampleCsr;