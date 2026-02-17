"use client";

import { useDevice } from "@/app/_hooks/device";

export default function TopBar() {
  const device = useDevice();

  if (device === "desktop") {
    return <nav className="top-bar">This is a TopBar</nav>;
  }

  return null;
}
