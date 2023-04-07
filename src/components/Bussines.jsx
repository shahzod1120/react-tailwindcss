import { styles } from '../util/style'
import { Button } from '../UI/Button'
import { Secure, Send, Star } from '../assets'

const Bussines = () => {
    return (
        <div id='services' className={`${styles.flexBetween} flex-1 lg:flex-row flex-col md:py-6 py-0 ${styles.marginY}`}>
            <div className='flex-1 lg:mb-0 mb-10  lg:max-w-[50%]'>
                <h1 className={`${styles.haeading1}`}>
                    Siz biznes bilan shug'ullanasiz, biz pulni hal qilamiz.
                </h1>
                <p className={`${styles.paragraph} py-3`}>
                    To'g'ri kredit karta bilan siz kredit qurish, mukofot olish va pulni tejash orqali moliyaviy hayotingizni yaxshilashingiz mumkin. Lekin bozorda yuzlab kredit kartalari bilan.
                </p>
                <Button style={'mt-4'} />
            </div>
            <div className='flex-1 flex  flex-row flex-wrap lg:flex-col gap-6 lg:px-12 px-0 lg:max-w-[50%] mx-auto'>
                <div className={`${styles.flexStart} md:${styles.flexCenter} gap-4 md:w-[45%] lg:w-[90%] w-[100%] cardGradient p-4 rounded-[25px]`}>
                    <img src={Star} alt="star" className={`${styles.flexCenter} rounded-full p-3 bg-dark w-[50px] h-[50px]`} />
                    <div>
                        <h5 className='text-[16px] font-medium text-white mb-[4px]'>Mukofotlar</h5>
                        <p className='text-[13px] text-montserrat text-lightWhite'>Eng yaxshi kredit kartalari aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qiladi</p>
                    </div>
                </div>
                <div className={`${styles.flexStart} md:${styles.flexCenter} gap-4 md:w-[45%] lg:w-[90%] w-[100%] cardGradient p-4 rounded-[25px] `}>
                    <img src={Secure} alt="star" className={`${styles.flexCenter} flex-1 rounded-full p-3 bg-dark w-[50px] h-[50px]`} />
                    <div>
                        <h5 className='text-[16px] font-medium text-white mb-[4px]'>100% Himoyalangan</h5>
                        <p className='text-[13px] text-montserrat text-lightWhite'>Ma'lumotlaringiz va tranzaktsiyalaringiz xavfsiz ekanligiga ishonch hosil qilish uchun faol choralar ko'ramiz.</p>
                    </div>
                </div>
                <div className={`${styles.flexStart} md:${styles.flexCenter} gap-4  md:w-[45%] lg:w-[90%] w-[100%] cardGradient p-4 rounded-[25px]`}>
                    <img src={Send} alt="star" className={`${styles.flexCenter} rounded-full p-3 bg-dark w-[50px] h-[50px]`} />
                    <div>
                        <h5 className='text-[16px] font-medium text-white mb-[4px]'>Balansni O'tkazish</h5>
                        <p className='text-[13px] text-montserrat text-lightWhite'>Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bussines
