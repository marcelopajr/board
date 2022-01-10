import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from '../components/Header';

import '../styles/global.scss';

const initialOptions = {
  'client-id':
    'Acoidrs8l6VWAzC2gnlTNEpd_ZebTqTZWP4q9W5_coXHoWqCX6vXUheqESqHMlsd1CriLUgWEv45IhrM',
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
