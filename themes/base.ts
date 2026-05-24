function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

type CssLeaf = string | number | undefined;

interface CssMap {
  [key: string]: CssLeaf | CssMap;
}

function flatten(prefix: string, value: CssMap, output: Record<string, string>) {
  for (const [key, entry] of Object.entries(value)) {
    if (entry === undefined) continue;
    const nextKey = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);

    if (entry && typeof entry === "object") {
      flatten(nextKey, entry, output);
      continue;
    }

    output[`--${nextKey}`] = String(entry);
  }
}

export function createCssVars(value: CssMap) {
  const output: Record<string, string> = {};
  flatten("", value, output);
  return output as Record<`--${string}`, string>;
}
