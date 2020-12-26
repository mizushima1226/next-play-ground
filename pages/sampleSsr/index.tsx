import Link from "next/link";

import Layout from "../../components/Layout";
import { Title } from "../../components/Title";

import { routes } from "../../utils/const";

const Index = () => {
  return (
    <Layout>
      <Title>OGPのサンプルです〜</Title>
      <p>
        <Link href={routes.sampleSsrNum(0)}>
          <a>サンプル１</a>
        </Link>
      </p>
      <p>
        <Link href={routes.sampleSsrNum(1)}>
          <a>サンプル２</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Index;