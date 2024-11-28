import React from 'react'

const Effort = () => {

    const efforts = [
        {
            percent:"32%",
            text:"Improvement in Open Rates"
        },
        {
            percent:"75%",
            text:"Improvement in Ramp Time"
        },
        {
            percent:"35%",
            text:"Improvement in Meetings Booked"
        },
    ]

  return (
    <section className=' px-[80px] my-10 bg-[#07292F]'>
      <div className='px-[40px] py-10 w-[60%] flex flex-col gap-4'>
        <h1 className='font-[600] text-[32px] leading-[39px]'>Allocate effort where your reps make an inpact.</h1>
        <h1 className='font-[600] text-[32px] leading-[39px] text-primary'><i>Let us handle the rest.</i></h1>
        <p className='font-[300] text-[20px] '>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>

        <div className='mt-10 grid grid-cols-3 gap-5'>
            {
                efforts.map( ({percent, text}, i) => {
                    return <div key={i}>
                        <h1 className='font-[700] text-[40px] text-primary'>{percent}</h1>
                        <p className='font-[500] text-[20px] leading-[26px]'>{text}</p>
                    </div>
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Effort
