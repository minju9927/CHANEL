import React, { useEffect } from 'react'
import './styles/Section4.scss'
import instarData from '../data/instarData'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Section4 = () => {
    useEffect(() => {

        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <section className='sc4'>
            <div className="inner">
                <div className="t-wrap">
                    <h2 className="con_tit">
                        Instagram
                    </h2>
                    <p className="txt_4">
                    @chanelofficial
                    </p>
                </div>
                <ul className='s4_lst'>
                    {instarData.map((data, index) => (
                        <li
                            data-aos="fade-up"
                            data-aos-delay={data.delay}
                            key={index}>
                            <a href="#">
                                <img src={data.src} alt={`img-${index}`} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Section4