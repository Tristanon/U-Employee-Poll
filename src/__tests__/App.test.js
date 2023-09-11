import * as React from "react";
import App from "../components/App";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("App", () => {
      // Mock the handleInitialData function and dispatch
    const mockHandleInitialData = jest.fn();
    const mockDispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the loginform onload", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
      );

      const loginHeading = screen.getByText('U-Employee Poll');
      expect(loginHeading).toBeInTheDocument();
    });

    it('renders login component when loading is true', () => {
        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={['/']}>
              <App dispatch={mockDispatch} loading={true} />
            </MemoryRouter>
          </Provider>
        );
        const loginComponent = screen.getByTestId('test-login');
        expect(loginComponent).toBeInTheDocument();
    });
});