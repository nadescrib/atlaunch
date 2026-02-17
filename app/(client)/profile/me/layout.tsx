import type { Metadata } from "next";
import "./layout.scss";
import { BottomBar, TopBar } from "@/app/_primitives/navs";

export const metadata: Metadata = {
  title: "AtLaunch | Profile",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopBar />
      {children}
      <BottomBar />
    </div>
  );
}
