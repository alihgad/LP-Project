import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export default function Work() {
  return (
    <>
        <section>
            <div className="container">
            <SectionHeading heading='OUR WORK' body='Witness Our Success Stories'/>
            <Card>
                <CardContent>
                    {/* <Image/> */}
                </CardContent>
            </Card>

            </div>
        </section>
    </>
  )
}
