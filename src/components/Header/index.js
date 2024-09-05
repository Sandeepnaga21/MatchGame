import './index.css'

const Header = props => {
  const {score, time} = props
  return (
    <nav className="nav-bar">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </div>
      <div>
        <p className="score">Score: {score}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="time-img"
        />
        <p className="time">{time} sec</p>
      </div>
    </nav>
  )
}

export default Header
