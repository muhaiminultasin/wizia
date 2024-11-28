import { div } from 'framer-motion/client'
import React from 'react'

const Group = () => {

    const images = [
        {
            img:"/img/G1.png",
            title:"You’re in Control",
            desc:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {
            img:"/img/G2.png",
            title:"Infinitely Scalable",
            desc:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {
            img:"/img/G3.png",
            title:"Infinitely Scalable",
            desc:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        },
    ]

  return (
    <section className='px-[20px] md:px-[140px] text-center md:text-start py-10 grid grid-cols1 md:grid-cols-3 gap-5'>
      {
        images.map( ({img,title,desc},i) => {
            return <div key={i}>
                <div className='w-[60px]  mx-auto md:mx-0 '>
                    <img src={img} alt="" className='w-fit'/>
                </div>

                <div className='mt-5'>
                    <h1 className='font-[600] text-[28px]'>{title}</h1>
                    <p className='mt-5 font-[300] text-[22px] leading-[34px]'>{desc}</p>
                </div>
            </div>
        })
      }
    </section>
  )
}

export default Group
