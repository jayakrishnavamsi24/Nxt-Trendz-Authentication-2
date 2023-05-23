import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={onClickLogout}
          className="logout-desktop-btn"
        >
          Logout
        </button>
        <button
          type="button"
          onClick={onClickLogout}
          className="logout-mobile-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
      <ul className="mobile-navbar-content">
        <li>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="mobile-navbar-icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="mobile-navbar-icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="mobile-navbar-icon"
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
