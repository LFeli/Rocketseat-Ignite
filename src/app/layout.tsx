import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/SideBar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Untitled UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={montserrat.className}>
        <div className="relative min-h-screen dark:bg-zinc-900 lg:grid lg:min-w-max lg:grid-cols-app">
          <Sidebar />

          <main className="max-w-screen px-4 pb-12 pt-24 lg:col-start-2 lg:w-auto lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
