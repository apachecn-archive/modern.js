// using cache to avoid multiple calls to loadConfig
const browsersListCache = new Map<string, string[]>();

export async function getBrowserslist(path: string) {
  if (browsersListCache.has(path)) {
    return browsersListCache.get(path)!;
  }

  const { default: browserslist } = await import(
    '@modern-js/utils/browserslist'
  );
  const result = browserslist.loadConfig({ path });

  if (result) {
    browsersListCache.set(path, result);
    return result;
  }

  return null;
}
