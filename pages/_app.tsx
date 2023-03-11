import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	style: ['italic', 'normal'],
	variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${poppins.variable} font-primary`}>
			<Component {...pageProps} />
		</main>
	);
}
