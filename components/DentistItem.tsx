import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ComponentProps {
  dentist: dentist
}

export function DentistItem({ dentist }: ComponentProps) {
  return (
    <Link href={`/dentistdetail/${dentist.slug || dentist.id}`}>
      <div className='relative h-0 pb-[100%] shadow-md'>
        <Image className='object-cover object-top absolute left-0 right-0 top-0 bottom-0 w-full h-full' src={dentist.image} alt={dentist.name} width={dentist.image_width} height={dentist.image_height} />
      </div>
      <div className='text-center pt-5'>
        <p className='font-bold'>{dentist.title_name}. {dentist.name} {dentist.lastname}</p>
        <p className='text-sm font-semibold'>{dentist.specialty}</p>
      </div>
    </Link>
  )
}
