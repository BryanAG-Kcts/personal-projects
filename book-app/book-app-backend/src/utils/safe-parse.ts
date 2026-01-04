import z from 'zod'

export async function safeParseInt(str: string) {
  return await z.coerce.number().int().safeParseAsync(str)
}
