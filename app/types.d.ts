/**
 * Extract a type from an array possibly undefined
 * @example type Constituent = ExtractResponseType<string[] | undefined>; // Constituent -> string
 */
export type ExtractResponseType<T> = T extends (infer R)[] ? R : never;
