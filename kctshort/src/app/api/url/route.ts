import { nanoid } from 'nanoid'
import { type NextRequest, NextResponse } from 'next/server'
import qrcode from 'qrcode'

export async function POST(request: NextRequest) {
  const host = request.headers.get('host')
  //const { url } = await request.json()
  const id = nanoid(8)
  const urlShorted = `https://${host}/${id}/`
  const qr = await qrcode.toDataURL(urlShorted).catch(() => null)

  return NextResponse.json({
    urlShorted,
    qr
  })
}
