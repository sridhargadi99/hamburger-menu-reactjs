import Header from '../Header'

import './index.css'

// Write your code here
const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-card-container">
        <img
          className="home-image-sm-style"
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
          alt="home"
        />
        <img
          className="home-image-lg-style"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
      </div>
    </div>
  </>
)

export default Home
