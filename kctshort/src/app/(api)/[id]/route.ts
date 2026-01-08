import { neon } from '@neondatabase/serverless'
import { type NextRequest, NextResponse } from 'next/server'
import { environment } from '@/constants/environment'

interface Params {
  params: Promise<{ id: string }>
}
export async function GET(request: NextRequest, headData: Params) {
  const params = await headData.params
  const id = params.id
  const sql = neon(environment.db)

  await sql`DELETE FROM urls WHERE id = ${id} AND expire_date < CURRENT_DATE`.catch(
    () => null
  )
  const data = await sql`SELECT url FROM urls WHERE id = ${id}`.catch(
    () => null
  )

  console.log({ data: !data })
  if (!data || data?.length === 0) {
    const host = request.headers.get('host')
    const protocol = host?.includes('localhost') ? 'http' : 'https'
    const errorUrl = `${protocol}://${host}/errors/404`
    return NextResponse.redirect(errorUrl)
  }

  return NextResponse.redirect(data[0].url)
}
