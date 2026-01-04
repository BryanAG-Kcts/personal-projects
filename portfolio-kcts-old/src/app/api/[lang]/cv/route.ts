import { statusCode } from '@/backend/constants/status/statusCode'
import { pdfController } from '@/backend/controller/pdf/controller'
import { Languages } from '@/locales/constants/constants'
import { NextRequest, NextResponse } from 'next/server'

interface Params {
  params: {
    lang: Languages
  }
}
export const GET = (_req: NextRequest, { params }: Params): NextResponse => {
  const [err, pdf] = pdfController.getPdf('cv', `cv-${params.lang}.pdf`)

  if (err) {
    return NextResponse.json({ error: err }, { status: statusCode.notFound })
  }

  return new NextResponse(pdf, { status: statusCode.ok })
}
