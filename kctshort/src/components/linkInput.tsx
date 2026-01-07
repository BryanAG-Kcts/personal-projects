'use client'
import { ArrowDownRight, Copy } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { post } from '@/constants/fetch'
import { isValidUrl } from '@/constants/validators'

export function LinkInput() {
  const [link, setLink] = useState('')
  const [shorten, setShorten] = useState({
    urlShorted: '',
    qr: ''
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isValidUrl(link)) {
      alert('Please enter a valid URL.')
      return
    }

    const response = await post('/api/url', { url: link })
    setShorten(response)
  }

  async function autoFillLink() {
    const text = await navigator.clipboard.readText().catch(() => null)
    text && setLink(text)
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(shorten.urlShorted).catch(() => null)
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className='flex gap-4 w-full py-4'>
        <input
          className='text-center placeholder:underline flex-1 min-w-0'
          type='text'
          placeholder='Paste your link here'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onFocus={autoFillLink}
        />

        <button
          type='submit'
          title='Shorten link'
          className='bg-foreground text-background aspect-square rounded justify-center flex items-center p-1 cursor-pointer'
        >
          <ArrowDownRight size={20} strokeWidth={2} />
        </button>
      </form>

      {shorten.urlShorted && (
        <div className='flex flex-col'>
          <img className='rounded' src={shorten.qr} alt='QR Code' />

          <div className='flex gap-4 py-4 items-center'>
            <p className='text-center flex-1'>{shorten.urlShorted}</p>

            <button
              type='button'
              title='Copy shorten link'
              className='bg-foreground text-background aspect-square rounded justify-center flex items-center p-1 cursor-pointer'
              onClick={copyToClipboard}
            >
              <Copy size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
