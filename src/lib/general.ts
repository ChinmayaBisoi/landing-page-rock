export function throttle(fn: (...args: unknown[]) => void, delay: number) {
  let lastTime = 0;
  return (...args: unknown[]) => {
    const now = Date.now();
    if (now - lastTime < delay) {
      return;
    }
    lastTime = now;
    fn(...args);
  };
}
