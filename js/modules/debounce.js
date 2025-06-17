export default function debounce(callback, delay) {
  let timer;
  return (...args) => {

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      console.log("executou o callback!")
      callback(...args);
      timer = null;

    }, delay)
  }
}

