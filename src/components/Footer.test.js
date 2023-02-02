// imports
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer"
import "@testing-library/jest-dom"

describe("<Footer />", () => {
  it("has a copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    // screen.debug()
    const footer = screen.getByText(/instruction team/i)
    expect(footer).toBeInTheDocument()
  })
})