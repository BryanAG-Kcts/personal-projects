import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

export const pdfController = {
  getPdf (dir: string, pdf: string): [boolean, Buffer | undefined] {
    const requestPath = join(process.cwd(), `/src/backend/assets/pdf/${dir}/${pdf}`)
    if (existsSync(requestPath)) {
      return [false, readFileSync(requestPath)]
    }

    return [true, undefined]
  }
}
