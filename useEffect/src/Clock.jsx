import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervallId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervallId);
  }, []);

  return <h2>{time.toLocaleTimeString()}</h2>;
}
