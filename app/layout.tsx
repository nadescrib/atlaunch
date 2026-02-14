import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./_styles/global.scss";

const outfit = Outfit({
  variable: "--outfit",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  weight: "400",
  variable: "--dm_sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "At Launch",
  description:
    "Anybody can use it! Launching your activity with enough funds will make it more seamless.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dm_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
