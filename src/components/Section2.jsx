import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './styles/Section2.scss'
const Section2 = () => {

  useEffect(()=>{

    Aos.init({duration:1000})

  },[])



  return (
    <section className='sc2'>
      <div className="inner">
        <div className="img-wrap" >
          {/* <img src="/img/intro_.png" alt="intro" data-aos="fade-left"/> */}
        </div>
        <div className="t-wrap" data-aos="fade-right">
          <p className="txt_1">
          CHANEL
          </p>
          <h2 className="con_tit">
          THE CHANEL 25 HANDBAG
          </h2>
          <p className="txt">
          하우스 앰배서더인 아티스트 제니(JENNIE)와 하우스의 친구인 <br/>싱어송라이터 두아 리파(Dua Lipa)가 새로운 CHANEL 25 백의 <br/>얼굴이되었습니다. (David Sims)의 사진을 통해 만나보세요.
          </p>
          <a href="#" className="con_btn">더보기</a>
        </div>
      </div>
    </section>
  )
}

export default Section2