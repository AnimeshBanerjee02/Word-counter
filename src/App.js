import React, { Component } from 'react';

class WordCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleTextChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  countWords = (text) => {
    return text.split(/\s+/).filter((word) => word !== '').length;
  };

  render() {
    const { text } = this.state;
    const wordCount = this.countWords(text);

    return (
      <div>
        <textarea
          rows="5"
          placeholder="Type your text here..."
          value={text}
          onChange={this.handleTextChange}
        />
        <p>
          Word Count: {wordCount}
        </p>
      </div>
    );
  }
}

export default WordCounter;
