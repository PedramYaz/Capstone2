import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let today = new Date();
      let tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0);
      let officialTime = String(today - tomorrow)
        .slice(0, -3)
        .slice(1);
      let timerInt = parseInt(officialTime);
      let timer = new Date(timerInt * 1000).toISOString().slice(11, 19);
      setTime(timer);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Timer">
      <h4>
        {/* Next Lyricle in: <b>{timer}</b> */}
        Next Lyricle in: {time}
      </h4>
    </div>
  );
}

export default Timer;
