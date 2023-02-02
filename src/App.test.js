// imports
import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";

// component
import App from "./App"

// custom jest matchers
import '@testing-library/jest-dom'

describe("<App />", () => {
  it("renders a greeting", () => {
    // arrange
    render( 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // screen.debug()
    screen.logTestingPlaygroundURL()
    // act
    const greeting = screen.getByRole('img', {
      name: /welcome to kevin tail in cat font/i
    })
    // assert
    expect(greeting).toBeInTheDocument()
  })

  it("has a footer", () => {
    render( 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    const footer = screen.getByText(/instruction team/i)
    // console.log("footer", footer)
    expect(footer).toBeInTheDocument()
  })
})