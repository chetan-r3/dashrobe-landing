import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'], // supports bold styles
})
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700","800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  )
}