import { useEffect, useState } from "react";

export function useTypewriter(text, speed = 55) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!text) {
      setOutput("");
      return;
    }

    let i = 0;
    let timer;

    const tick = () => {
      if (i <= text.length) {
        setOutput(text.slice(0, i));
        i += 1;
        timer = setTimeout(tick, speed);
      }
    };

    tick();

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed]);

  return output;
}
