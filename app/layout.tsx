import { Nunito } from 'next/font/google'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import ListingModal from './components/modals/ListingModal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Open Air Museum',
  description: 'Open Air Museum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={nunito.className}>
        <Navbar />
        <ListingModal />
        {children}
      </body>
    </html>
  )
}
