import { Link, useLocation } from 'react-router-dom'
import LogoKasa from '../assets/LogoKasa.png'
import './navBar.scss'


function NavBar() {
    const location = useLocation()

    return (
        <div className='navBar'>
            <img src={LogoKasa} className='navImg' />
            <div className='navBarLinks'>
                <Link to='/home' className={`navBarLink ${location.pathname === '/home' ? '' : 'notActive'}`}>Accueil</Link>
                <Link to='/a-propos' className={`navBarLink ${location.pathname === '/a-propos' ? '' : 'notActive'}`}>A Propos</Link>
            </div>
        </div>
    )
}

export default NavBar
