import { BottomBar, TopBar } from "@/app/_primitives/navs";
import type { Metadata } from "next";
import "./layout.scss";

export const metadata: Metadata = {
  title: "AtLaunch | Dashboard",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id="section-dashboard">
      <TopBar />
      {children}
      <BottomBar />
    </section>
  );
}
