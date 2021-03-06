import Head from 'next/head';
import '../styles/globals.scss';
import 'macro-css';
import { theme } from '../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
    <>
       <Head>
        <title>DJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
   
  );
}

export default MyApp;
