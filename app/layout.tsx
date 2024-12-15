import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/app/components/header'
import { Providers } from '@/app/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GreenPiece - CO2 Saving Calculator',
  description: 'Calculate your personal CO2 savings with GreenPiece',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-green-50`}>
        <Providers>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-green-600 text-white py-4 text-center">
            <p className="text-sm">&copy; 2023 GreenPiece. All rights reserved.</p>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
