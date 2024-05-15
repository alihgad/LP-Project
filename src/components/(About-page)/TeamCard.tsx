import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Url } from 'url'
import baker from './../../../public/team/baker.jpg'
import emily from './../../../public/team/emily.jpeg'
import john from './../../../public/team/john.jpeg'
import olivea from './../../../public/team/olivia.jpeg'

export default function TeamCard({index , name , role , twitter , linkedin,about,className}:{
    index:number,
    name:string,
    role:string,
    twitter?:Url,
    linkedin?:Url,
    about?:string,
    className?:string
}) {

  let srcs = [ olivea , baker ,john, emily  ]
  return (
    <>
        <div className={` ${className} font-open`}>
        <Image className=' lg:w-[270px] h-[300px] rounded-lg font-normal '  src={srcs[index]} alt={name} />
        <p className='mt-6 text-2xl'>{name}</p>
        <p className='mt-3 text-[#6153CD] text-lg font-semibold'>{role}</p>
        <p className='mt-4 text-base text-muted-foreground text-balance font-light'> {about ? about :  'Lorem ipsum dolor sit amet, consectetur adipiscing'}</p>
        <div className="icons mt-4">
            <Link  target='_blank' href={ twitter? twitter : 'https://twitter.com'}><i className='fa-brands fa-twitter mr-5 text-[#98A2B3] fa-xl hover:text-blue-main transition-all duration-200'></i></Link>
            <Link  target='_blank' href={ linkedin ? linkedin : 'https://linkedin.com'}><i className='fa-brands fa-linkedin text-[#98A2B3] fa-xl hover:text-blue-main transition-all duration-200'></i></Link>
            
        </div>
        </div>

    
    </>
  )
}
