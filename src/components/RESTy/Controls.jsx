/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ valueUrl, valueRawJson, onUrlChange, onMethodChange, onRawJsonChange, onSubmit }) => (
  <>
    <form>
      <input type="text" aria-label="urlTextbox" placeholder="URL" onChange={onUrlChange}/>
      <section aria-label="methodSelector">
        <label htmlFor="GET">
              GET
          <input type="radio" name="method" onChange={onMethodChange} value="GET" id="GET"/>
        </label>
        <label htmlFor="POST">
              POST
          <input type="radio" name="method" onChange={onMethodChange} value="POST" id="POST"/>
        </label>
        <label htmlFor="PUT">
              PUT
          <input type="radio" name="method" onChange={onMethodChange} value="PUT" id="PUT"/>
        </label>
        <label htmlFor="PATCH">
              PATCH
          <input type="radio" name="method" onChange={onMethodChange} value="PATCH" id="PATCH"/>
        </label>
        <label htmlFor="DELETE">
              DELETE
          <input type="radio" name="method" onChange={onMethodChange} value="DELETE" id="DELETE"/>
        </label>
      </section>
      <input type="text" aria-label="rawJsonTextbox" placeholder="Raw JSON body" onChange={onRawJsonChange}/>
    </form>
  </>
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
