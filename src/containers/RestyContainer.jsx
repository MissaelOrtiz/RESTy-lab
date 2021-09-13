import React, { Component } from 'react';
import Controls from '../components/RESTy/Controls';

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: 'GET',
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
    const { url, rawJson, /*res*/ } = this.state;
    return (
      <div>
        <Controls 
          valueUrl={url} 
          valueRawJson={rawJson}
          onUrlChange={this.handleURLChange}
          onMethodChange={this.handleMethodChange}
          onRawJsonChange={this.handleRawJsonChange}
          onSubmit={this.handleSubmit}
        />
        {this.state.method}
      </div>
    );
  }
}
