import React from 'react';
import ReactDOM from 'react-dom';
import UserAccountDetails from '../UserAccountDetails';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


afterEach(cleanup);

it("renders UserAccountDetails without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserAccountDetails></UserAccountDetails>, div)
})

it("renders UserAccountDetails correctly", () => {
    const {getByTestId} = render(<UserAccountDetails title= "Hello"/>)
    expect(getByTestId('uad-title')).toHaveTextContent("Hello")
})


