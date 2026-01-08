import { neon } from '@neondatabase/serverless'
import { nanoid } from 'nanoid'
import { type NextRequest, NextResponse } from 'next/server'
import qrcode from 'qrcode'
import { environment } from '@/constants/environment'

export async function POST(request: NextRequest) {
  const host = request.headers.get('host')
  const protocol = host?.includes('localhost') ? 'http' : 'https'
  const { url, key } = await request.json()
  const id = nanoid(8)

  const sql = neon(environment.db)
  const urlShorted = `${protocol}://${host}/${id}/`
  const isPersistent = key === environment.persistenceKeySecret
  const query = isPersistent
    ? sql`INSERT INTO urls (id, url, expire_date) VALUES (${id}, ${url}, NULL)`
    : sql`INSERT INTO urls (id, url, expire_date) VALUES (${id}, ${url}, CURRENT_DATE + INTERVAL '3 days')`

  const data = await query.catch(() => null)
  if (!data) {
    return NextResponse.json(
      { error: 'Failed to shorten URL.' },
      { status: 500 }
    )
  }

  const qr = await qrcode.toDataURL(urlShorted).catch(() => null)
  return NextResponse.json({
    urlShorted,
    qr
  })
}
