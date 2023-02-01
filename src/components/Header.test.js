// imports
import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
// component
import Header from "./Header"

// custom jest matchers
import '@testing-library/jest-dom'

describe("<Header />", () => {
  it("has an image", () => {
    // arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debug
    screen.logTestingPlaygroundURL()
    // act
    const image = screen.getByRole("img")
    // asset
    expect(image).toHaveAttribute("src", "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbiUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60") 
  })
})