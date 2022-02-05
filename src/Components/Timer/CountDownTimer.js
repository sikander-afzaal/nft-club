import React, { useRef, useState, useEffect } from "react";

function CountDownTimer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Feb 26, 2022 00:00:00 ").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="timer ">
      <div className="time-wrap">
        <div className="teko timer-number">{timerDays}</div>
        <span> DAYS</span>
      </div>
      <div className="timer-dot "></div>
      <div className="time-wrap">
        <div className="teko timer-number">
          {/* {timer.hours} */}
          {timerHours}
        </div>
        <span> HRS</span>
      </div>
      <div className="timer-dot "></div>
      <div className="time-wrap">
        <div className="teko timer-number">{timerMinutes}</div>
        <span>MIN</span>
      </div>
      <div className="timer-dot"></div>
      <div className="time-wrap">
        <div className="teko timer-number">{timerSeconds}</div>
        <span>SEC</span>
      </div>
    </div>
  );
}

export default CountDownTimer;
