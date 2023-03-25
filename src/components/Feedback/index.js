import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onChange = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state

    return (
      <div className="bg">
        <div className="white">
          {isClicked ? (
            <>
              <img className="emoji" src={loveEmojiUrl} alt="love emoji" />
              <h2 className="thankyou-note">Thank you!</h2>
              <p className="reply-note">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          ) : (
            <>
              <h1 className="head">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emoji-div">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id} className="emoji-small">
                    <img
                      onClick={this.onChange}
                      className="emoji"
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                    />
                    <p>{eachEmoji.name}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback

/*

<h1 className="head">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emoji-div">
            {emojis.map(eachEmoji => (
              <li className="emoji-small">
                <img onClick={this.onChange}
                  className="emoji"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
                <p>{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
          */
