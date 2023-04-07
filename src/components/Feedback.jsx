import { quates } from "../assets"
import { userFeedback } from "../util/constants"
import { styles } from "../util/style"

const Feedback = () => {

  return (
    <div id="feedback" className={`${styles.flexStart} md:py-6 py-2 flex-col`}>
      <div className={`${styles.flexBetween} md:py-6 py-4 md:flex-row flex-col`}>
        <h1 className={`${styles.haeading1} md:pe-[20px] pe-0`}>Odamlar biz haqimizda nima deyishadi</h1>
        <p className={`${styles.paragraph} md:max-w-[45%] md:px-10 px-0`}>
          Sayyoramizning istalgan nuqtasida karta to'lovlarini qabul qilish va biznesingizni rivojlantirish uchun kerak bo'lgan hamma narsa.
        </p>
      </div>
      <div className='flex justify-between flex-wrap items-center gap-8'>
        {
          userFeedback.map(e => (
            <div key={e.id} className="feedbackCard flex flex-col justify-between w-[100%] sm:w-[45%] xl:w-[30%] items-start h-[380px] py-[45px] md:py-[55px] px-[20px] md:px-[35px] rounded-[40px] border-dark border-[1px] ">
              <img src={quates} alt="quates" className="text-white flex items-center" />
              <p className={`${styles.paragraph} flex items-start  py-8`}>{e.feedback}</p>
              <div className="flex items-center gap-3">
                <div className={`${styles.flexCenter}  bg-dark p-[10px] text-[16px] w-[50px] h-[50px] rounded-full`}>
                  <h2 className={`flex-1 text-center font-semibold text-white `}>{e.name.split(' ')[0][0] + e.name.split(' ')[1][0]}</h2>
                </div>
                <div>
                  <h5 className="text-white text-[16px]">{e.name}</h5>
                  <p className="text-lightWhite text-[12px] flex items-end">{e.job}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Feedback
