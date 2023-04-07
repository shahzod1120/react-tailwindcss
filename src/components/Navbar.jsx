import { CLose, Logo, Menu } from "../assets"
import { styles } from "../util/style"
import { Nav } from '../util/constants'
import { useState } from "react"

function Navbar() {
  const [activeNav, setActiveNav] = useState(0)
  const [navBtn, setNavBtn] = useState(false)

  const handleActive = id => setActiveNav(id)

  return (
    <div className={`flex flex-col w-full pt-6 sm:px-0 px-6 relative `}>
      <div className={`${styles.flexBetween} pb-6`}>
        <a href="#" onClick={() => setActiveNav(0)}>
          <img src={Logo} alt="Logo" className="w-[150px] h-[42px] cursor-pointer" />
        </a>
        <ul className={`list-none ${styles.flexCenter} sm:flex hidden`}>
          {
            Nav.map((e, idx) => (
              <li key={e.id}
                className={`font-montserrat font-normal cursor-pointer ${activeNav == e.id ? 'text-white font-semibold' : 'text-lightWhite'} hover:text-white ${idx !== Nav.length - 1 ? 'md:mr-8 mr-4' : 'mr-0'}`}
                onClick={() => handleActive(e.id)}
              >
                <a href={`#${e.link}`}>
                  {e.title}
                </a>
              </li>
            ))
          }
        </ul>
        <div className="sm:hidden flex">
          <img src={navBtn ? CLose : Menu} alt="OpenBnt" onClick={() => setNavBtn(prev => !prev)} className="w-[30px] h-[30px] object-contain z-10" />
        </div>
      </div>
      <div className={`${navBtn ? "flex" : 'hidden'} slideNav  w-full  top-20 py-6 z-50`}>
        <ul className={`list-none ${styles.flexStart} sm:hidden flex flex-col`}>
          {
            Nav.map((e, idx) => (
              <li key={e.id}
                className={`font-montserrat font-normal cursor-pointer transition-all duration-500 hover:ml-2 ${activeNav == e.id ? 'text-white font-semibold' : 'text-lightWhite'} hover:text-white ${idx !== Nav.length - 1 ? 'mr-10 mb-6' : 'mr-0 mb-0'}`}
                onClick={() => handleActive(e.id)}
              >
                <a href={`#${e.link}`}>
                  {e.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div >
  )
}

export default Navbar