/*
 * copied from https://stackoverflow.com/questions/6346766/javascript-enumerator
 * Jul 2022
 */
export function Enum() {
  for (let i = 0; i < arguments.length; ++i) {
    this[arguments[i]] = i;
  }

  return this;
}
