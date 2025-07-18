import {IntlProvider} from 'next-intl';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import '@/styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
    const {locale = 'pt'} = useRouter();
    const messages = pageProps.messages;

    return (
        <IntlProvider locale={locale} messages={messages}>
            <Component {...pageProps} />
        </IntlProvider>
    );
}

export default MyApp;
