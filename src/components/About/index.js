// Write your code here
import Header from '../Header'

import './index.css'

// Write your code here
const About = () => (
  <>
    <Header />
    <div className="about-container">
      <div className="about-card-container">
        <img
          className="about-image-sm-style"
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
        />
        <img
          className="about-image-lg-style"
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </div>
    </div>
  </>
)

export default About
