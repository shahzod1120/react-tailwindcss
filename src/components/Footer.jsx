import { Facebook, Instagram, Linkedin, Logo, Twitter } from "../assets"
import { styles } from "../util/style"

const Footer = () => {
    return (
        <div className={` ${styles.paddingY} footer mx-auto md:mt-8 mt-6 container`}>
            <div className={` md:mt-10 mt-6 pb-8 flex lg:flex-row flex-col justify-between lg:items-start w-full`}>
                <div className="flex-1">
                    <a href="#">
                        <img src={Logo} alt="Logo" className="w-[200px] h-[56px] mb-4" />
                    </a>
                    <p className={styles.paragraph}>To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli.</p>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap  flex-[1.5] lg:w-full lg:justify-around justify-between gap-6 lg:mt-0 mt-6">
                    <div className='flex-1 md:min-w-[150px] min-w-[200px] '>
                        <h4 className="font-montserrat font-semibold text-white text-[16px] mb-3">Foydali havolalar</h4>
                        <ul className="list-none" >
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Tarkib</a>
                            </li>
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>U qanday ishlaydi</a>
                            </li>
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Yaratish</a>
                            </li>
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Tadqiq qiling</a>
                            </li>
                            <li>
                                <a href="#" className={`${styles.paragraph} text-[14px]`}>Shartlar va xizmatlar</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1 md:min-w-[150px] min-w-[200px] '>
                        <h4 className="font-montserrat font-semibold text-white text-[16px] mb-3">Jamiyat</h4>
                        <ul className="list-none" >
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Yordam markazi</a>
                            </li>
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Hamkorlar</a>
                            </li>
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Takliflar</a>
                            </li>
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Blog</a>
                            </li>
                            <li>
                                <a href="#" className={`${styles.paragraph} text-[14px]`}>Axborot byulletenlari</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1 md:min-w-[150px] min-w-[200px] '>
                        <h4 className="font-montserrat font-semibold text-white text-[16px] mb-3">Hamkor</h4>
                        <ul className="list-none" >
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Bizning hamkorimiz</a>
                            </li>
                            <li>
                                <a href='#' className={`${styles.paragraph} text-[14px]`}>Hamkor bo'ling</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${styles.flexBetween} sm:flex-row flex-col gap-4 border-t-[0.5px] border-border text-white pt-8`}>
                <div>
                    Copyright © {new Date().getFullYear()} HooBank. All Rights Reserved.
                </div>
                <div className="flex gap-5">
                    <a href="#">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="#">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="#">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="#">
                        <img src={Linkedin} alt="" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer
