import React from 'react'

type PhoneLinkProps = {
  phone: string
}

export const PhoneLink = ({ phone }: PhoneLinkProps) => {
  return (
    <div className='container p-2 flex flex-col'>
      <label className='text-blue-400' htmlFor='phone-link-body'>
        電話番号リンク
      </label>
      <a
        className='py-4 pl-0.5 text-blue-600 shadow-md border rounded w-36 underline hover:no-underline'
        id='phone-link-body'
        href={`biztel:${phone}`}
        target='_blank'
        rel='noopener noreferrer'>
        {phone}
      </a>
    </div>
  )
}
