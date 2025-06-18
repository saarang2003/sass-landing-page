import { SITE_CONFIG } from "../app/seo";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Providers from "../components/provider/providers";

const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
          font.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
