import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

const Review = () => {

    const ReviewContent = [
        {
            img:"/img/Group 9.png",
            name:"John Doe",
            text:"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            title:"Chief Strategy Officer @ Company",
        },
        {
            img:"/img/Group 9.png",
            name:"John Doe",
            text:"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            title:"Chief Strategy Officer @ Company",
        },
        {
            img:"/img/Group 9.png",
            name:"John Doe",
            text:"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            title:"Chief Strategy Officer @ Company",
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        
      };

  return (
    <section className='px-[140px] py-10 text-center'>
        <Slider {...settings} className=''>
            {
                ReviewContent.map(({img, name, text,title},i) => {
                    return <div
                    className="flex flex-col justify-center items-center sm:space-y-11 space-y-7 "
                    key={i}
                  >
                    <div className="bg-[#183A40] flex justify-center items-center rounded-full sm:h-[74px] h-[56px] sm:w-[74px] w-[56px] mx-auto">
                      <img src={img} alt="" />
                    </div>
                    <div className="text-center">
                      <h2 className="font-workSans font-[300] text-2xl sm:text-[32px] sm:leading-[41px] leading-8 -tracking-[2%] text-white ">
                        {text}
                      </h2>
                    </div>
                    <div className="text-center">
                      <p className="font-workSans sm:text-2xl text-[18px] sm:leading-9 leading-[27px] font-semibold text-primary ">
                        {name}
                      </p>
                      <span className="font-workSans sm:text-xl text-base sm:leading-8 leading-6 text-secondary">
                        {title}
                      </span>
                    </div>
                  </div>
                })
            }
        </Slider>
    </section>
  )
}

export default Review
