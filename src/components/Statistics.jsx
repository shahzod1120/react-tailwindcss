import { StatisticsInfo } from "../util/constants"
import { styles } from "../util/style"

const Statistics = () => {
  return (
    <div className={`w-full flex-1  ${styles.flexAround} ${styles.marginY} md:flex-row flex-wrap gap-5 relative`}>
      {
        StatisticsInfo.map(e => (
          <div className={`${styles.flexCenter}`} key={e.id} >
            <h1 className={` md:py-0 py-4  font-semibold md:text-[28px] text-[24px] text-lightWhite text-montserrat `}> {e.value}+ </h1>
            <p className="uppercase md:text-[18px] text-[16px] textGradient ms-2">{e.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Statistics
