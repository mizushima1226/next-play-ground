import { useState } from "react";
import { Helmet as _Helmet } from "react-helmet";

import Layout from '../components/Layout'
import { Title } from '../components/Title'

const src1 = "https://cdn.lgtmoon.dev/images/111074";
const src2 = "https://cdn.lgtmoon.dev/images/3162";

const Helmet = () => {
  const [flg, setFlg] = useState(true);
  const src = flg ? src1 : src2
;
  return (
    <Layout title="ヘルメット">
      <_Helmet>
        <title>mizuタイトル</title>
        <meta name="description" content="Helmet application" />
        <meta property="og:title" content="サンプルOGP" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.google.com/" />
        <meta property="og:image" content={src} />
        <meta property="og:site_name" content="sample-ogp" />
        <meta property="og:description" content="OGPの練習中です。。。" />
        <meta name="twitter:card" content="summary_large_image" />
      </_Helmet>
      <Title>ヘルメット⛑</Title>
      <div>
        <button type="button" onClick={() => setFlg(!flg)}>Change!</button>
      </div>
      <img src={src} alt="" width="300" height="" />
      <a href="http://twitter.com/share?url=https://sample-ogp.tiiny.site/&text=OGPテスト&hashtags=OGP" target="_blank">ツイート</a>
    </Layout>
  )
}

export default Helmet;