import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global.styles'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="Default Next Template"
        description="Apenas um template next, para usar em outros projetos"
        canonical="https://reactavancado.com.br/"
        openGraph={{
          url: 'https://reactavancado.com.br/',
          title:'React Avançado - Crie aplicações reais com NextJS, GraphQL e mais.',
          description:'Apenas um template next, para usar em outros projetos',
          images: [{ url: 'https://reactavancado.com.br/img/cover.png' }],
          site_name: 'React Avançado',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@Lucassmc',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App