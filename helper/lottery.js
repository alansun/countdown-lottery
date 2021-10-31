export function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export function arrayLottery(array) {
  return Math.floor(Math.random() * array.length);
}
export function clearAllInterval() {
  let id = window.setInterval(function () {}, 0);
  while (id--) {
    window.clearInterval(id);
  }
}
