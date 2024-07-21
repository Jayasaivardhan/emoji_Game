/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    value: false,
    visited: [],
    end: false,
    result: 'Lose',
  }

  shuffledEmojisList = emojisList => emojisList.sort(() => Math.random() - 0.5)

  reset = () => {
    this.setState({
      score: 0,
      value: false,
      visited: [],
      end: false,
      result: 'lose',
    })
    const {score, topScore} = this.state
    if (topScore < score) {
      this.setState({topScore: score})
    }
  }

  clicking = async id => {
    const {visited} = this.state
    if (visited.includes(id) === true) {
      this.setState({end: true})
    } else {
      this.setState(prev => ({
        score: prev.score + 1,
        visited: [...prev.visited, id],
      }))
      if (visited.length === 11) {
        this.setState({end: true, value: true, result: 'Won'})
      }
    }
  }

  render() {
    const {emojisList} = this.props
    const filEmo = this.shuffledEmojisList(emojisList)
    const {score, topScore, end, result, value} = this.state
    return (
      <div className="back">
        <NavBar end={end} score={score} topScore={topScore} />
        {end ? (
          <ul className="emojis">
            {filEmo.map(eachEmoji => (
              <EmojiCard
                clicking={this.clicking}
                eachEmoji={eachEmoji}
                key={eachEmoji.id}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            reset={this.reset}
            value={value}
            result={result}
            score={score}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
