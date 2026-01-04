export async function saveFetch<T>(
  fetchPromise: Promise<Response>
): Promise<[T | null, Error | null]> {
  try {
    const response = await fetchPromise
    if (response.ok) {
      return [await response.json(), null]
    }

    throw new Error(
      `Something went wrong: ${response.statusText} data: ${await response.text()}`
    )
  } catch (error) {
    return [null, error as Error]
  }
}
