
import React from 'react'

const Train = () => {

  const trainingBenifits = [
    {img:"/img/Vector.png", text:"Quick to ramp"},
    {img:"/img/Vector.png", text:"Easy to optimize"},
    {img:"/img/Vector.png", text:"Quick to scale up"},
    {img:"/img/Vector.png", text:"Works with all your existing tools"},
  ]

  return (
    <section className='px-[140px] py-10 bg-[#07292F]'>
      <div className='w-[60%] ms-auto'>
        <h1 className='font-[600] text-[40px]'>Train your aiDR on your...</h1>
        <h1 className='font-[500] text-[40px] text-primary'><i>prefered email st|</i></h1>
        <p className='font-[300] text-[24px] mt-5'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

        <div className='flex flex-wrap gap-4 my-10'>
            {
              trainingBenifits.map(({img, text},i) =>{
                return <div key={i} className='flex gap-2 items-center'>
                <img src={img} alt="" className='w-fit h-fit'/>
                <p className='font-[500] text-[20px] text-primary'>{text}</p>
            </div>
              })
            }
        </div>
      </div>
    </section>
  )
}

export default Train;
