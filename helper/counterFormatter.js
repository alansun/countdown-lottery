function format(num) {
  return num >= 10 ? `${num}` : `0${num}`;
}
export function calCountdown(time) {
  if (time <= 0) {
    return {
      finish: true,
      day: "00",
      hour: "00",
      min: "00",
      sec: "00",
      milliSec: "0",
    };
  }
  const milliSecond = Math.floor((time / 100) % 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  return {
    finish: false,
    hour: format(hours),
    min: format(minutes),
    sec: format(seconds),
    days: format(days),
    milliSec: milliSecond,
  };
}
