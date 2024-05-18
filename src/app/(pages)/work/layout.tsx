import Header from '@/components/(global)/Header'
import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header bread='work' body='Our Work'/>
        {children}
    </>
  )
}
