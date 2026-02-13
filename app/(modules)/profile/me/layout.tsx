import type { Metadata } from "next";
import "./index.scss";
import { BottomBar, TopBar } from "@/app/_components/navs";

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
