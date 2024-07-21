// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {result, score, value, reset} = props
  return (
    <div className="card">
      <div className="gameDetail">
        <h1 className="head"> You {result} </h1>
        <p className="p2">{value ? 'Best Score' : 'Score'}</p>
        <p className="p3">{score}/12</p>
        <button type="button" onClick={reset} className="butt">
          Play Again
        </button>
      </div>
      {value ? (
        <img
          className="resicon"
          alt="win or lose"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        />
      ) : (
        <img
          className="resicon"
          alt="win or lose"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard
