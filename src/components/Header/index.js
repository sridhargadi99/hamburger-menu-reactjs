/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-menu-container">
      <button type="button" className="logo-button-style">
        <Link to="/" className="link-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo-style"
          />
        </Link>
      </button>
      <Popup
        modal
        trigger={
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            className="menu-button-style"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu-style" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <nav className="nav-close-container">
              <button
                type="button"
                className="menu-button-style"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon-style" id="Save" />
              </button>
            </nav>
            <div className="sub-container">
              <ul className="popup-main-container">
                <Link to="/" className="link-style" onClick={() => close()}>
                  <li className="popup-sub-container">
                    <AiFillHome className="icon-style" />
                    <p className="content-style">Home</p>
                  </li>
                </Link>
                <Link
                  to="/about"
                  className="link-style"
                  onClick={() => close()}
                >
                  <li className="popup-sub-container">
                    <BsInfoCircleFill className="icon-style" />
                    <p className="content-style">About</p>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default withRouter(Header)
