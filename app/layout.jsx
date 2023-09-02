import Navbar from './components/Navbar'
import './styles/globals.scss'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:  "Furever AI",
  description: 'Where pets and people belong together.',
  icons: {
    icon: '/images/icons/dog-paw-white.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  )
}
