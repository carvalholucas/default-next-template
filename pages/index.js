import Head from 'next/head'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SectionHero from '../components/SectionHero'
import SectionAboutUs from '../components/SectionAboutUs'
import SectionServices from '../components/SectionServices'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SectionHero />
      <SectionAboutUs />
      <SectionServices />
    </Layout>
  )
}

export default Home
