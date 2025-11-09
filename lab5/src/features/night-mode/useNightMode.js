import { useEffect } from "react";

export function useNightMode() {
  useEffect(() => {
    const h = new Date().getHours();
    const isNight = h >= 21 || h < 6;

    document.body.classList.toggle("night", isNight);
  }, []);
}
