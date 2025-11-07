import react, { useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client';
import Client from '@/components/lib/apollo';
import { AuthProvider } from '@/components/context/AuthContext';
import { CheckoutProvider } from '@/components/context/CheckoutContext';
import '../styles/global.scss';
import Header from '../components/header';
import Footer from '@/components/footer';
import Head from 'next/head';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';



function App({ Component,
  pageProps: { ...pageProps } }) {

  const [language, setlanguage] = useState('de')
  const [lightmode, setLightmode] = useState(true);

  const [queryClient] = useState(() => new QueryClient())


  return (


    <ApolloProvider client={Client}>
      <QueryClientProvider client={queryClient}>

        <AuthProvider>
          <CheckoutProvider>

            <Head>
              <title>Liva Hair & Bauty Salon</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta name="description" content="Hair & Beauty Salon"></meta>

            </Head>


            <Header language={language} />
            <main style={{ display: 'flex', flexDirection: "column", maxWidth: "100%", paddingTop: 50 }}>
              <Component {...pageProps} />
            </main>

            <Footer language={language} />
          </CheckoutProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ApolloProvider>








  );
}

export default App;