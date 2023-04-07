import { Billing, Contarct, Feedback, Footer, Home, Navbar, Servises, Statistics } from "./components";
import Bussines from "./components/Bussines";
import Clients from "./components/Clients";
import { styles } from "./util/style";

function App() {

  return (
    <div className="bg-primary">
      <div className='shadowNavbar'>
        <div className="mx-auto container ">
          <div className={`font-montserrat w-full h-auto  ${styles.flexBetween}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className="mx-auto container">
        <div className={`font-montserrat flex-col w-full h-auto sm:px-0 px-6 ${styles.flexBetween}`}>
          <Home />
          <Statistics />
          <Bussines />
          <Billing />
          <Contarct />
          <Feedback />
          <Clients />
          <Servises />
        </div>
      </div>
      <div className={`font-montserrat w-full h-auto mx-auto bg-bgFooter sm:px-0 px-6  ${styles.flexBetween}`}>
        <Footer />
      </div>
    </div>
  )
}

export default App;