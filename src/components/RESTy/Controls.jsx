/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/RestyCss.css';

const Controls = ({ valueUrl, valueRawJson, onUrlChange, onMethodChange, onRawJsonChange, onSubmit }) => (
  <div className={styles.controls}>
    <form>
      <input type="text" aria-label="urlTextbox" placeholder="URL" onChange={onUrlChange} value={valueUrl} className={styles.urlTextbox}/>
      <section aria-label="methodSelector" className={styles.methodSelector}>
        <label htmlFor="GET">
          <div>GET</div>
          <input type="radio" name="method" onChange={onMethodChange} value="GET" id="GET"/>
        </label>
        <label htmlFor="POST">
          <div>POST</div>
          <input type="radio" name="method" onChange={onMethodChange} value="POST" id="POST"/>
        </label>
        <label htmlFor="PUT">
          <div>PUT</div>
          <input type="radio" name="method" onChange={onMethodChange} value="PUT" id="PUT"/>
        </label>
        <label htmlFor="PATCH">
          <div>PATCH</div>
          <input type="radio" name="method" onChange={onMethodChange} value="PATCH" id="PATCH"/>
        </label>
        <label htmlFor="DELETE">
          <div>DELETE</div>
          <input type="radio" name="method" onChange={onMethodChange} value="DELETE" id="DELETE"/>
        </label>
        <button onSubmit={onSubmit}>GO!</button>
      </section>
      <input type="text" aria-label="rawJsonTextbox" placeholder="Raw JSON body" onChange={onRawJsonChange} value={valueRawJson} className={styles.rawJsonTextbox}/>
    </form>
  </div>
);

Controls.propTypes = {
  valueUrl: PropTypes.string.isRequired,
  valueRawJson: PropTypes.string.isRequired, 
  onUrlChange: PropTypes.func.isRequired, 
  onMethodChange: PropTypes.func.isRequired, 
  onRawJsonChange: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired
};

export default Controls;
