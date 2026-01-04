import { statusCode } from '@/backend/constants/status/statusCode'
import { pdfController } from '@/backend/controller/pdf/controller'
import { NextRequest, NextResponse } from 'next/server'
interface Params {
  params: {
    certificate: string
  }
}
export function GET (_req: NextRequest, { params }: Params): NextResponse {
  const certificate = params.certificate.endsWith('.pdf') ? params.certificate : `${params.certificate}.pdf`
  const [err, pdf] = pdfController.getPdf('certificates', certificate)

  if (err) {
    return NextResponse.json({
      message: 'PDF NOT FOUND',
      status: statusCode.notFound
    }, { status: statusCode.notFound })
  }
  return new NextResponse(pdf)
}
