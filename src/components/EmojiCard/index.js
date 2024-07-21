// Write your code here.

import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {eachEmoji, clicking} = this.props
    const {emojiName, emojiUrl, id} = eachEmoji
    const check = () => {
      clicking(id)
    }
    return (
      <li onClick={check} className="lists">
        <button className="emobut" type="button">
          <img className="emo" src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
