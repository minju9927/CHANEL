import React, { useRef, useEffect } from 'react'
import './styles/Section1.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import sc1Data from '../data/sc1Data'
const Section1 = () => {

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)


  useEffect(() => {
    if (swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }

  }, [])

  return (
    <section className='sc1'>
      <div className="inner">
        <div className="t-wrap">
          <h2 className="con_tit">
            F/W COLLECTION
          </h2>
          <p className="txt_2">
            Shop By Category
          </p>
        </div>
        <div className="sc1-slider-wrap">
          <div className="in">
          <Swiper
            slidesPerView={3}
            modules={[Navigation, Pagination]}
            className='s1_slider'
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{
              type: 'progressbar'
            }}
            loop={true}
          >
            {sc1Data.map((item) => (
              <SwiperSlide key={item.id}>
                <a href="#" >
                  <div className="info-wrap">
                    <div className='s1-btn'>
                      {item.title}
                    </div>
                    <div className='name'>
                      {item.name}
                    </div>
                  </div>
                  <div className="img-wrap">
                    <img src={item.image} alt="img" />
                  </div>
                  <div className='kname'>
                    {item.kname}
                  </div>
                  <div className="amount">
                    {item.amount}
                  </div>
                </a>
              </SwiperSlide>
            ))}


          </Swiper>
          <button className='custom-prev' ref={prevRef} type='button' />
          <button className='custom-next' ref={nextRef} type='button' />
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default Section1