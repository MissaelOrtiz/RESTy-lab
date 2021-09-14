/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/RestyCss.css';

const Controls = ({ valueUrl, valueRawJson, onChange, onSubmit }) => (
  <div className={styles.controls}>
    <form onSubmit={onSubmit} onChange={onChange}>
      <input type="text" aria-label="urlTextbox" placeholder="URL" value={valueUrl} name="url" className={styles.urlTextbox}/>
      <section aria-label="methodSelector" className={styles.methodSelector}>
        <label htmlFor="GET">
          <input type="radio" name="method" value="GET" id="GET"/>
          <div className={styles.selectorName}>GET</div>
        </label>
        <label htmlFor="POST">
          <input type="radio" name="method" value="POST" id="POST"/>
          <div className={styles.selectorName}>POST</div>
        </label>
        <label htmlFor="PUT">
          <input type="radio" name="method" value="PUT" id="PUT"/>
          <div className={styles.selectorName}>PUT</div>
        </label>
        <label htmlFor="PATCH">
          <input type="radio" name="method" value="PATCH" id="PATCH"/>
          <div className={styles.selectorName}>PATCH</div>
        </label>
        <label htmlFor="DELETE">
          <input type="radio" name="method" value="DELETE" id="DELETE"/>
          <div className={styles.selectorName}>DELETE</div>
        </label>
        <button className={styles.selectorName}>GO!</button>
      </section>
      <input type="text" aria-label="rawJsonTextbox" placeholder="Raw JSON body" value={valueRawJson} name="rawJson" className={styles.rawJsonTextbox}/>
    </form>
  </div>
);

Controls.propTypes = {
  valueUrl: PropTypes.string.isRequired,
  valueRawJson: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired
};

export default Controls;
