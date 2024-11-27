import { Button } from '@nextui-org/react';
import React from 'react'

const Hero = () => {
  return (
    <section className='px-[140px]'>
        <div className='py-[100px]'>
            <p className='font-[400] text-[24px] text-primary'>AI SDRs (aiDRs)</p>
            <h1 className='font-[700] text-[64px] w-1/2 leading-tight'>More <span className=''><i>leads</i>,</span> less <span className=''><i>people</i></span></h1>
            <p className='max-w-[450px] font-[300] text-[20px] leading-[26px ]'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <Button className='bg-primary rounded-full mt-5 font-[500]'>Sign Up for the Beta</Button>
        </div>
    </section>
  )
}

export default Hero;
