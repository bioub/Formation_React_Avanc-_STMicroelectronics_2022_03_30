import { useEffect, useState } from "react";
import { format as formatDateFns } from 'date-fns';

type Props = {
  delay?: number;
  format?: string;
}

function Clock({ delay = 1000, format = 'HH:mm:ss' }: Props) {
  console.log('Clock renders');
  
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    console.log('startClock');
    const intervalId = setInterval(() => {
      setNow(new Date());
      // setNow((previousNow) => previousNow + 1000);
    }, delay);
    return () => {
      console.log('stopClock');
      clearInterval(intervalId);
    }
  }, [delay]);

  return <div className="Clock">Hello {formatDateFns(now, format)}</div>;
}

export default Clock;

