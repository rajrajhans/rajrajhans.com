import React from "react"

class TypeWriter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      wordIndex: 0,
      isDeleting: false,
      isWaiting: false,
    }
  }

  componentDidMount() {
    window.addEventListener('load', this.type())
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.type())
  }

  type = () => {
    const { wordIndex, isDeleting, text, wait } = this.state
    const currentIndex = wordIndex % this.props.words.length
    const currentWord = this.props.words[currentIndex]

    this.setState({ isWaiting: false })

    if (isDeleting) {
      this.setState({
        text: currentWord.substring(0, text.length - 1)
      })
    } else {
      this.setState({
        text: currentWord.substring(0, text.length + 1)
      })
    }

    let typeSpeed = 200

    if (this.isDeleting) {
      typeSpeed /= 2
    }

    if (!isDeleting && (text === currentWord)) {
      typeSpeed = (Math.random() * Math.floor(3)) * 1000

      this.setState({
        isWaiting: true,
        isDeleting: true,
      })
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        wordIndex: this.state.wordIndex + 1
      })
      typeSpeed = 400
    }

    setTimeout(() => this.type(), typeSpeed)
  }

  render() {
    const { staticText } = this.props
    const { text, isWaiting } = this.state

    return (
      <div className="typewriter">
        { staticText.map((sentence, index) => (
          <span key={ index } className={`sentence ${(index === staticText.length - 1) ? 'last-sentence' : '' }`}>{ sentence }&nbsp;</span>
        ))}
        <span className={`dynamic-text ${ isWaiting ? 'fade' : '' }`}>{text}</span>
      </div>
    )
  }
}

export default TypeWriter