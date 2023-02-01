// imports
import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
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
    // screen.logTestingPlaygroundURL()
    // act
    const greeting = screen.getByText("Welcome to Kevin Tails")
    // assert
    expect(greeting).toBeInTheDocument()
  })

  it("has a heading", () => {
    render( 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    const heading = screen.getByRole("heading", {
      name: /kevin tails/i
    })
    // console.log("heading", heading)
    expect(heading).toBeInTheDocument()
  })
})