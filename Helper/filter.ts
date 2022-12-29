export default function filter(input: object): object {
  let filtered: object = {};
  for (let key of Object.keys(input)) {
    type ObjectKey = keyof typeof input;
    if (input[key as ObjectKey] !== "" && input[key as ObjectKey] !== null) {
      filtered = { ...filtered, [key as ObjectKey]: input[key as ObjectKey] };
    }
  }

  return filtered;
}
