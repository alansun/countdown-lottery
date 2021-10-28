import { useEffect, useState } from "react";

function format(num) {
  return num >= 10 ? `${num}` : `0${num}`;
}
function calCountdown(endTime) {
  const now = Date.now();
  const diff = endTime - now;
  if (diff <= 0) {
    return {
      finish: true,
      day: "00",
      hour: "00",
      min: "00",
      sec: "00",
      milliSec: "0",
    };
  }
  const milliSecond = Math.floor((diff / 100) % 10);
  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return {
    finish: false,
    hour: format(hours),
    min: format(minutes),
    sec: format(seconds),
    days: format(days),
    milliSec: milliSecond,
  };
}
const useClientCountDown = (countdown_ts) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    let timeCount = setInterval(() => {
      const left = calCountdown(countdown_ts);
      setTimeLeft(left);
    }, 100);
    return function cleanup() {
      clearInterval(timeCount);
    };
  });
  return timeLeft;
};

export default useClientCountDown;
