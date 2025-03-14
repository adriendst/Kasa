import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/navBar";
import "./Root.scss";

function Root() {
    const location = useLocation();

    return (
        <div>
            {location.pathname !== "/error" && <NavBar />}
            <Outlet />
            {location.pathname !== "/error" && <Footer />}
        </div>
    );
}

export default Root;
