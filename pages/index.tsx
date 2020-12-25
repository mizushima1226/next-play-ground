import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/sample">
        <a>Sample</a>
      </Link>
    </p>
    <p>
      <Link href="/sampleCsr">
        <a>Client Side Rendering</a>
      </Link>
    </p>
    <p>
      <Link href="/sampleSsr">
        <a>Server Side Rendering</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
