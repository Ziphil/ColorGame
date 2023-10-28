//


export function pick<T>(values: Array<T>, length: number): Array<T> {
  const copiedValues = [...values];
  const pickedValues = [];
  for (let current = 0; current < length; current ++) {
    const index = Math.floor(Math.random() * copiedValues.length);
    pickedValues.push(copiedValues[index]);
    copiedValues.splice(index, 1);
  }
  return pickedValues;
}

export function modDiff(first: number, second: number, mod: number) {
  const diff = Math.abs(first - second);
  return Math.min(diff, mod - diff);
}