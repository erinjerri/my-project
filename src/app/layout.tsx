import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout
