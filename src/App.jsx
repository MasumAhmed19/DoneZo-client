import Footer from "./component/Navbars/Footer"
import Header from "./component/Navbars/Header"
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
        <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App
