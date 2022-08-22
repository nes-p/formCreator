import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import * as testData from './testData.json';

describe("App", () => {
  const testString  = JSON.stringify(testData);
  it("renders form by Json", () => {
    render(<App />);
    screen.debug();
    const TextArea = screen.getByPlaceholderText(/Please enter Json here/i);
    const ApplyButton = screen.getByText(/Apply/i);

    fireEvent.change(TextArea , {
      target: {value: testString}
    });

    screen.debug();

    userEvent.click(ApplyButton);
    screen.debug();
    const FormTitle = screen.getByText(/Form Title/i);
    expect(FormTitle).toBeInTheDocument();
  })
});



