import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/navBar"
import Footer from "../Footer/Footer"
import './Root.scss'


function Root() {

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>

    )
}

export default Root