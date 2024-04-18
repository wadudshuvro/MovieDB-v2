import { Sora } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Aside from '@/components/Aside';

const sora = Sora({ subsets: ['latin'] });

export const metadata = {
	title: 'Cine Rental',
	description: 'A movie database website',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${sora.className} dark:bg-body bg-white dark:text-white text-dark`}
			>
				<Header />
				<main>
					<div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
						<Aside />
						{children}
					</div>
				</main>
				<Footer />
				<div id="modal-root-content" />
			</body>
		</html>
	);
}
