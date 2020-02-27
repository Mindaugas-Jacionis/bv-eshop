import { useState, useEffect, useCallback, useRef } from "react";

function useTimer(initialTime = 10) {
  const [time, setTime] = useState(initialTime);
  const intervalId = useRef(null);

  const clear = useCallback(() => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }, []);

  useEffect(() => {
    if (!intervalId.current) {
      const id = setInterval(() => {
        // if (time === 0) {
        //   clear();
        // } else {
        //   setTime(time - 1);
        // }
        setTime(time - 1);
      }, 1000);

      intervalId.current = id;
    }

    return clear;
  }, [clear, time]);

  return { time, clear };
}

export default useTimer;
