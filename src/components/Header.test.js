// imports
import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// component
import Header from "./Header"

// custom jest matchers
import '@testing-library/jest-dom'

describe("<Header />", () => {
  // async added to call back function for userEvent
  it("has an image", async () => {
    // arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debug
    // screen.logTestingPlaygroundURL()

    // act
    const image = screen.getByRole("img")
    // await added to allow redirect to happen after clicking link
    await userEvent.click(image)

    // assert
    expect(image).toHaveAttribute("src", "greet2.png")
    // location.pathname displays url
    expect(location.pathname).toEqual('/')
  })

  it("has links", async () => {
    // arrange
    // const user = userEvent.setup()
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debug
    // screen.logTestingPlaygroundURL()
    // act
    const homeLink = screen.getByRole('link', {
      name: /home/i
    })
    const indexLink = screen.getByRole('link', {
      name: /see the cats/i
    })
    const editLink = screen.getByRole('link', {
      name: /add a cat/i
    })
    // assert
    expect(location.pathname).toEqual('/')
    expect(homeLink).toBeInTheDocument() 
    expect(indexLink).toBeInTheDocument() 
    expect(editLink).toBeInTheDocument() 

    await userEvent.click(indexLink)
    expect(location.pathname).toEqual('/catindex')

    await userEvent.click(editLink)
    expect(location.pathname).toEqual('/catedit')

    await userEvent.click(homeLink)
    expect(location.pathname).toEqual('/')
  })
})