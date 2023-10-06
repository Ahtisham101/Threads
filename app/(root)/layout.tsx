import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
// import { dark } from "@clerk/themes";

import "../globals.css"
import Topbar from "@/componens/shared/Topbar"
import LeftSidebar from "@/componens/shared/LeftSidebar"
import RightSidebar from "@/componens/shared/RightSidebar"
import Bottombar from "@/componens/shared/Bottombar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={
        {
          // baseTheme: dark,
        }
      }
    >
      <html lang='en'>
        <body className={inter.className}>
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
