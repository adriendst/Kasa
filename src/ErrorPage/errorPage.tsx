import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/navBar"
import './errorPage.scss'

function ErrorPage() {

  return (
    <div>
      <NavBar />
      <div className="errorPage">
        <h2 className="errorNumber">404</h2>
        <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/home' className="homeLink">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage
