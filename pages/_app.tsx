import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import { Provider } from 'react-redux';
import wrapper from '@/store';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	style: ['italic', 'normal'],
	variable: '--font-poppins',
});

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<Provider store={store}>
			<main className={`${poppins.variable} font-primary`}>
				<Component {...pageProps} />
			</main>
		</Provider>
	);
}
