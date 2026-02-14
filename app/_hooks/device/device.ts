import { TDevice } from "@/app/_hooks/device/type";
import { useEffect, useState } from "react";

export function useDevice(breakpoint: number = 992): TDevice {
  const [device, setDevice] = useState<TDevice>("desktop");

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < breakpoint) {
        setDevice("mobile");
      } else {
        setDevice("desktop");
      }
    };

    checkDevice(); // initial check
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, [breakpoint]);

  return device;
}
