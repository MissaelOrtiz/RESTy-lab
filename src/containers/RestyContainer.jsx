import React, { Component } from 'react';
import Controls from '../components/RESTy/Controls';
import Display from '../components/RESTy/Display';
import styles from '../styles/RestyCss.css';

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: '',
    rawJson: '',
    res: { hello: 'world' }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleRes = (res) => {
    this.setState({ res });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { url, rawJson, res } = this.state;
    return (
      <div className={styles.container}>
        <Controls 
          valueUrl={url} 
          valueRawJson={rawJson}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Display res={res} />
      </div>
    );
  }
}
