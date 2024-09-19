import React, { Component } from 'react';

class Typewriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      period: props.period || 2000,
      toRotate: JSON.parse(props.toRotate) || []
    };
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  tick = () => {
    const { loopNum, toRotate, isDeleting, text, period } = this.state;
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    if (isDeleting) {
      this.setState({ text: fullTxt.substring(0, text.length - 1) });
    } else {
      this.setState({ text: fullTxt.substring(0, text.length + 1) });
    }

    let delta = 120 - Math.random() * 100;

    if (isDeleting) {
      delta /= 1.5;
    }

    if (!isDeleting && text === fullTxt) {
      delta = period;  
      this.timeout = setTimeout(() => {
        this.setState({ isDeleting: true });
        this.tick();
      }, 1000);  
      return;
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
      delta = 500;
    }

    this.timeout = setTimeout(this.tick, delta);
  };

  render() {
    return (
      <h1 className="typewrite">
        <span className="wrap">{this.state.text}</span>
      </h1>
    );
  }
}

export default Typewriter;
