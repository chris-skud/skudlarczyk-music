import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Skudlarczyk Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Skudlarczyk Music" />
        <p className="description">
          Skudlarczyk music
        </p>
      </main>

      <Footer />
    </div>
  )
}
