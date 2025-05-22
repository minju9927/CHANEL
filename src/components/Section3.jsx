import React from 'react'
import './styles/Section3.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const Section3 = () => {

    const slideClasses = [
        's3_sl_1',
        's3_sl_2',
        's3_sl_3',
        's3_sl_4',
        's3_sl_5',
        's3_sl_6',
        's3_sl_7',
        's3_sl_8'
    ]
    return (
        <section className='sc3'>
            <div className="inner">
                <div className="t-wrap">
                    <div className="img-lg">
                        <img src="./img/s3_logo.svg" alt="" />
                    </div>
                    <h2 className="con_tit">
                        <span className="vintage">VINTAGE CHANEL</span>
                    </h2>
                    <p className="txt">
                        “Fashion fades, only style remains the same” <br />
                        패션은 사라지지만, 스타일은 영원하다.
                    </p>
                    <a href="#" className="con_btn blue">
                        더보기
                    </a>
                </div>
                <div className="s3_sl_wrap">
                    <div className="in">
                        <Swiper
                            spaceBetween={22}
                            slidesPerView={2.3}
                            loop={true}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2.08
                                }
                            }}
                        >
                            {slideClasses.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className={slide}></div>
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3