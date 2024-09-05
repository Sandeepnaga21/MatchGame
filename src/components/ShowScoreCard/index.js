import './index.css'

const ShowScoreCard = props => {
  const {score, onClickPlayAgainBtn} = props
  const onClickBtn = () => {
    onClickPlayAgainBtn()
  }
  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="head">YOUR SCORE</p>
      <p>{score}</p>
      <button type="button" onClick={onClickBtn}>
        Play Again
      </button>
    </div>
  )
}

export default ShowScoreCard
