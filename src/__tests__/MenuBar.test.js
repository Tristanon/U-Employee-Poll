import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import configureStore from 'redux-mock-store';
import MenuBar from '../components/MenuBar';

// Create a mock store
const mockStore = configureStore([]);

test('MenuBar component snapshot', () => {
  const store = mockStore({ authedUser: null });
  const { asFragment } = render(
    <Provider store={store}>
      {/* Wrap MenuBar in MemoryRouter and provide a basename */}
      <MemoryRouter initialEntries={['/']} initialIndex={0} basename="/">
        <MenuBar loading={false} />
      </MemoryRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});