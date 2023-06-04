export const key = mirror({
  books: '',
})

function mirror<T extends object>(obj: T, parentKey?: string): T {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const next = value
      ? mirror(value, key)
      : [parentKey, key].filter(Boolean).join('.')

    return { ...acc, [key]: next }
  }, {} as T)
}
