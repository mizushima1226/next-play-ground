import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <p>
      <Link href="/sample">
        <a>Sample</a>
      </Link>
    </p>
    <p>
      <Link href="/sampleHelmet">
        <a>Helmet</a>
      </Link>
    </p>
    <p>
      <Link href="/sampleSsrOgp">
        <a>Sample SSR OGP</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
