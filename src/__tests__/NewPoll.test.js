import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import NewPoll from '../components/NewPoll';
import '@testing-library/jest-dom/extend-expect';

describe('NewPoll Component Tests', () => {
  it('should enable the submit button when both inputs have input values', async () => {
    // Render the NewPoll component within the test environment
    const { getByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );

    // Get references to the input fields and submit button
    const inputOne = getByTestId('test-option-one');
    const inputTwo = getByTestId('test-option-two');
    const submitButton = getByTestId('test-submit-button');

    // Initially, the submit button should be disabled
    expect(submitButton).toHaveAttribute('disabled');

    // Simulate user input in both input fields
    fireEvent.change(inputOne, { target: { value: 'first value' } });
    fireEvent.change(inputTwo, { target: { value: 'second value' } });

    // After input, the submit button should no longer be disabled
    expect(submitButton).not.toHaveAttribute('disabled');
  });
});






