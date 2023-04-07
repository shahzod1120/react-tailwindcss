import { styles } from '../util/style';
import { Airbnb, Binance, Coinbase, Dropbox } from '../assets';

const Clients = () => {
  return (
    <div className={`flex-1 ${styles.flexAround} ${styles.paddingY} mx-auto flex-wrap gap-6 w-full md:px-10 px-0`}>
      <img src={Airbnb} alt="Airbn" className='sm:w-[150px] w-[90%] sm:h-[50px] h-auto flex items-center '/>
      <img src={Binance} alt="Binance" className='sm:w-[150px] w-[90%] sm:h-[50px] h-auto flex items-center '/>
      <img src={Coinbase} alt="Coinbase" className='sm:w-[150px] w-[90%] sm:h-[50px] h-auto flex items-center '/>
      <img src={Dropbox} alt="Dropbox" className='sm:w-[150px] w-[90%] sm:h-[50px] h-auto flex items-center '/>
    </div>
  )
}

export default Clients;
