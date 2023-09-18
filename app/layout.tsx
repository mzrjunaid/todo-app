import './globals.css'
import type { Metadata } from 'next'

import { Navbar } from '@/components'

import { montserrat, poppins } from './fonts'

export const metadata: Metadata = {
  title: 'JM Todo List Web App',
  description: 'Todo List web app to cover all the record keeping information and track daily todo list with updated status.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main className='box-border'>{children}</main>
      </body>
    </html>
  )
}
