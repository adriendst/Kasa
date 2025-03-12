import './footer.scss'
import LogoDark from '../assets/LogoKasaDark.png'

function Footer() {

    return (
        <div className='footer'>
            <img src={LogoDark}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>

    )
}

export default Footer