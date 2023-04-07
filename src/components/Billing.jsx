import { Button } from '../UI/Button';
import { Apple, Bill, Google } from "../assets";
import { styles } from "../util/style";

const Billing = () => {
    return (
        <div id='products' className={`${styles.flexBetween} ${styles.marginY} py-2 flex-1 md:flex-row flex-col-reverse `}>
            <div className={`${styles.flexCenter} flex-1 relative`}>
                <img src={Bill} alt="" />
            <div className='md:flex hidden bgRadialGradiend absolute left-[-80px] right-[600px] top-[-300px] bottom-[0px]' />
            </div>
            <div className={`${styles.flexStart} flex-1 flex-col mm:px-16 sm:mb-0 mb-10 `}>
                <h1 className={`${styles.haeading1}`}>Hisob-kitob va hisob-fakturani osongina boshqaring.</h1>
                <p className={`${styles.paragraph} py-3`}>Aslida, bu mahsulot, lekin ayni paytda massa. Mauris eu adipiscing ultrices methodio aenean neque. Darhaqiqat, butun tibbiyot punkti butun ko'chada joylashgan.
                </p>
                <div className={`${styles.flexCenter} md:gap-6 gap-4`}>
                    <img src={Apple} alt="" />
                    <img src={Google} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Billing;
