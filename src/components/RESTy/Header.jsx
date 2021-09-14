import React, { Component } from 'react';
import styles from '../../styles/RestyCss.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        RESTy - 
        <span className={styles.smallText}> A web-based API Server Client</span>
      </div>
    );
  }
}
