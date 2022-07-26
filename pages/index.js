import Head from 'next/head'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SectionHero from '../components/SectionHero'
import Section from '../components/Section'

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
      <Section />
    </ Layout>
  )
}

export default Home
