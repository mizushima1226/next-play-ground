import Link from 'next/link'
import Layout from '../components/Layout'

import { routes } from "../utils/const";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href={routes.sample}>
        <a>Sample</a>
      </Link>
    </p>
    <p>
      <Link href={routes.sampleCsr}>
        <a>Client Side Rendering</a>
      </Link>
    </p>
    <p>
      <Link href={routes.sampleSsr}>
        <a>Server Side Rendering</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
