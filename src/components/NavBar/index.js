// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, end} = props
  return (
    <div className="nav-bar">
      <div className="scores">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="col head1"> Emoji Game</h1>
      </div>
      {!end && (
        <div className="col scores">
          <p className="pa1"> Score: {score}</p>
          <p className="pa1 tot">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
