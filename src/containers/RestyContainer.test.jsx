/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RestyContainer from './RestyContainer';

describe('RestyContainer', () => {
  it('should display a controls section and a display section', async () => {
    render(<RestyContainer />);
    const controlsForm = screen.getByTestId('controls-form');
    expect(controlsForm).not.toBeEmptyDOMElement();

    const urlInput = await screen.findByPlaceholderText('URL');
    userEvent.type(urlInput, 'http://futuramaapi.herokuapp.com/api/quotes');

    const getRadio = await screen.findByText('GET');
    userEvent.click(getRadio);

    const submitButton = await screen.findByRole('button', { name: 'submit-button' });
    userEvent.click(submitButton);

    return waitFor(() => {
      const frys = screen.getAllByText('"Fry"');
      expect(frys.length).toEqual(2);
    });
  });
});
