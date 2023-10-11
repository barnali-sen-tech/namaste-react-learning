import {render, screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("should load contact us component",()=>{
  render(<Contact/>)
  const heading = screen.getByRole("heading")
  expect(heading).toBeInTheDocument();
})

test("should load button",()=>{
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();
})

test("should load button by text",()=>{
    const button = screen.getByText("submit")
    expect(button).toBeInTheDocument();
})

test("should load input name inside contact componet",()=>{
    const iName = screen.getAllByPlaceholderText("name")
    expect(iName).toBeInTheDocument()
})

//quering
test("should load all inputs inside contact componet",()=>{
    const inputBoxes = screen.getAllByRole("textbox")
    expect(inputBoxes).toBe(2)
    //expect(inputBoxes).not.toBe(3)
})