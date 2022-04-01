import React, { useState } from 'react';
import Clock from './Clock';

function ClockWithControls() {
  const [delay, setDelay] = useState(1000);
  const [format, setFormat] = useState('HH:mm:ss');

  return (
    <div className="ClockWithControls">
      <label>
        Delay : <input value={delay} onChange={(e) => setDelay(+e.target.value)} />
      </label>
      <label>
        Format : <input value={format} onChange={(e) => setFormat(e.target.value)} />
      </label>
      <Clock delay={delay} format={format} />
    </div>
  );
}

export default ClockWithControls;
