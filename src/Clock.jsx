import { useState } from "react";

function Clock() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  let [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}


export default Clock;