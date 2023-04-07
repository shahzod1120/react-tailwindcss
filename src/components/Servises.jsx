import { Button } from "../UI/Button"
import { styles } from "../util/style"

const Servises = () => {
  return (
    <div className={`${styles.flexBetween} ${styles.marginY} md:flex-row flex-col md:px-[70px] md:py-[80px] px-[30px] py-[40px]  gap-10 w-full bgServises `}>
      <div className="">
        <h1 className={`${styles.haeading2}`}>Keling, hozir xizmatimizni sinab ko'raylik!</h1>
        <p className={`${styles.paragraph} py-3`}>Sayyoramizning istalgan nuqtasida karta to'lovlarini qabul qilish va biznesingizni rivojlantirish uchun kerak bo'lgan hamma narsa.</p>
      </div>
      <div className='md:w-[40%] flex md:justify-end md:self-center self-start justify-start'>
        <Button />
      </div>
    </div>
  )
}

export default Servises
