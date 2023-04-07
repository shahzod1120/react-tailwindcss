import React from 'react'
import { Chegirma, RobotHand } from '../assets'
import { styles } from '../util/style'
import { Button } from '../UI/Button'

const Home = () => {
    return (
        <div id='home' className={`w-full flex md:flex-row flex-col justify-between md:items-center items-start sm:pt-8 pt-2 md:pb-[20px] `}>
            <div className={`flex-[1.2] ${styles.flexStart} md:mb-0 mb-10 flex-col  pt-0 relative`}>
                <div className={`${styles.flexCenter} sm:mt-0 mt-6 mb-3 py-[5px] px-3 discountGradient gap-2 rounded-[10px]`}>
                    <img src={Chegirma} alt="Dicount" className='w-[32px] h-[32px] flex items-center justify-center' />
                    <p className={`text-lightWhite sm:text-[16px] text-[14px] text-center`}>
                        <span className='text-white text-center'>20%</span> Chegirma <span className='text-white'>1 Oylik</span> Xisob uchun
                    </p>
                </div>
                <div className='w-full'>
                    <h1 className={`${styles.haeading1}`}>
                        Yangi Avlod <br className='sm:flex hidden' /> <span className='textGradient'>To'lov usuli</span>
                    </h1>
                </div>
                <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
                    Bizning mutaxassislar jamoasi sizning ehtiyojlaringizga mos keladigan kredit kartalarini aniqlash uchun metodologiyadan foydalanadi.
                    Biz yillik foiz stavkalarini, yillik to'lovlarni ko'rib chiqamiz.
                </p>
                <Button style={'mt-4'} />
            </div>
            <div className={`${styles.flexCenter} flex-1 relative md:w-auto w-full `}>
                <img src={RobotHand} alt="BgHome" className='z-5 text-white w-full h-full' />
                <div className='bghomegradient absolute md:flex z-1 hidden  right-[100px] left-[150px] top-[0px] bottom-[-200px]' />
            </div>
        </div>
    )
}

export default Home