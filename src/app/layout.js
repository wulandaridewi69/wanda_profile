import './globals.css';
import { Inter } from 'next/font/google';

import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'W A N D A',
  description: 'Description about portfolio',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Header/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </>
  )
}
