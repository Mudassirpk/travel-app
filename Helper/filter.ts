export default function filter(input: object): object {
  let filtered: object = {};
  for (let key of Object.keys(input)) {
    let _key:string = key as string
    if (input[key] !== "" && input[key] !== null) {
      filtered = { ...filtered, [key]: input[key] };
    }
  }

  return filtered;
}
