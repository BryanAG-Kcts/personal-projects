'use client'
import { ArrowDownRight, Copy, InfoIcon } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { post } from '@/constants/fetch'
import { isValidUrl } from '@/constants/validators'

export function LinkInput() {
  const [link, setLink] = useState('')
  const [shorten, setShorten] = useState({
    urlShorted: '',
    qr: null
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isValidUrl(link)) {
      toast('Please enter a valid URL.')
      return
    }

    const persistenceKey = event.currentTarget['persistence-key'].value
    const response = await post('/url', {
      url: link,
      key: persistenceKey
    }).catch(() => null)

    if (!response || response.error) {
      toast('An error occurred while shortening the URL.')
      return
    }
    setShorten(response)
    toast('URL shortened successfully!')
  }

  async function autoFillLink() {
    const text = await navigator.clipboard.readText().catch(() => null)
    if (text) {
      setLink(text)
      toast('Link pasted from clipboard!')
    }
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(shorten.urlShorted).catch(() => null)
    toast('Shortened link copied to clipboard!')
  }

  return (
    <main className='flex flex-col gap-4'>
      <form onSubmit={handleSubmit} className='flex gap-4 w-full py-4'>
        <input
          className='text-center placeholder:underline flex-1 min-w-0'
          type='text'
          placeholder='Paste your link here'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onFocus={autoFillLink}
        />

        <input
          className='placeholder:underline absolute top-0 left-0 m-2'
          type='text'
          placeholder='Your key to persistent links (optional)'
          name='persistence-key'
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
        <div className='flex flex-col gap-2'>
          <p>Here's your shortened link</p>
          {shorten.qr && (
            <img className='rounded' src={shorten.qr} alt='QR Code' />
          )}

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

      <ToastContainer
        theme='dark'
        position='bottom-right'
        icon={<InfoIcon />}
      />
    </main>
  )
}
