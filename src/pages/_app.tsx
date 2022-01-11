import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from '../components/Header';

import '../styles/global.scss';

const initialOptions = {
  'client-id':
    'AX_SCy3h4MWY6xeP2bMHyycRJhpyRiu1gL-nu-Pe8aHnhU0UoBgAmxt6g34a4UYpHkX2Rco5IcDTXdFQ',
  currency: 'BRL',
  intent: 'capture',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
