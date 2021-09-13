import React, { Component } from 'react';

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: '',
    rawJson: '',
    res: ''
  }

  handleURLChange = (event) => {
    this.setState({ url: event.target.value });
  }

  handleMethodChange = (event) => {
    this.setState({ method: event.target.value });
  }

  handleRawJsonChange = (event) => {
    this.setState({ rawJson: event.target.value });
  }

  handleRes = (res) => {
    this.setState({ res });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}
