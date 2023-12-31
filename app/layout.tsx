import TheHeader from '@/components/TheHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import TheFooter from '@/components/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Breeds of dogs',
  description: 'Find anythink breeds of dogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <main className="container">
          {children}
        </main>
      <TheFooter/>
      </body>
    </html>
  )
}
