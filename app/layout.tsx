import Navbar from './components/Navbar'
import './styles/globals.scss'
import variables from './variables.module.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:  "Furever AI",
  description: 'Where pets and people belong together.',
  icons: {
    icon: '/images/dog-paw-white.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className="">
            <h1>Hello There!</h1>
          {children}
        </main>
      </body>
    </html>
  )
}
