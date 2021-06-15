export const throttle = (func, delay) => {
  let throttled = false;
  // do something
  return (...arg) => {
    if (throttled) return;
    throttled = true;
    setTimeout(() => {
      func.call(null, ...arg);
      throttled = false;
    }, delay);
  };
};

export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...arg) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...arg), delay);
  };
};
