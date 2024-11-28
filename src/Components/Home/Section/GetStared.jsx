import { Button } from '@nextui-org/react'
import React from 'react'

const GetStared = () => {
  return (
    <section className='py-10'>
        <div className='max-w-[640px] mx-auto text-center flex flex-col gap-5'>
            <p className='font-[400] text-[20px] leading-[24px] text-primary'>GET STARTED</p>
            <h1 className='font0[500] text-[36px] leading-[35px]'><i>Embrace</i> the new era <i>of outbound</i>.</h1>
            <p>Wizia lets you train, activate, and optimize aiDRs. 
            Take your outbound to new levels of performance and efficiency.</p>
            <Button className='w-fit mx-auto bg-primary'>Sign Up for the Beta </Button>
        </div>
    </section>

  )
}

export default GetStared
