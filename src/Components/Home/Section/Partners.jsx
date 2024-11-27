import { img } from 'framer-motion/client'
import React from 'react'

const Partners = () => {

  const logos = [
    {
      img:"/img/BackHub logo.png",
    },
    {
      img:"/img/CableLabs logo.png",
    },
    {
      img:"/img/EasyEuro logo.png",
    },
    {
      img:"/img/DBS logo.png",
    },
    {
      img:"/img/AMD logo.png",
    }
  ]

  return (
    <section className='px-[140px] py-10'>
        <p className='text-center text-primary uppercase'>our trusted partners</p>
      <div className='grid grid-cols-2 md:grid-cols-5'>
        {
          logos.map( ({img},i)=> {
            return <img key={i} src={img} alt="" className='mx-auto'/>
          })
        }
      </div>
    </section>
  )
}

export default Partners;
