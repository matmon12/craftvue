export type AddPrefixKey<T, P extends string> = {
  [K in keyof T as `${P}${string & K}`]: T[K]
}
