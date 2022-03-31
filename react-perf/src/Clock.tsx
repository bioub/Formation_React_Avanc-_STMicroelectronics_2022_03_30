import { useEffect, useState } from "react";

function Clock() {
  console.log('Clock renders');
  
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return <div className="Clock">Hello {now.toLocaleTimeString()}</div>;
}

export default Clock;

