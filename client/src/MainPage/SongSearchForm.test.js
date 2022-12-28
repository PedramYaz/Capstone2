import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SongSearchForm from "./SongSearchForm";
import axios from "axios";

// smoke test
it("renders without crashing", function () {
  render(<SongSearchForm />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<SongSearchForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("handle the button clicks", function () {
  const { getByText } = render(<songSearchForm />);
  const buttonCount = localStorage.clicks;

  // click on the button
  fireEvent.click(getByText("SKIP"));

  // is the count different?
  // expect(buttonCount).toHaveTextContent("2")
  expect(buttonCount).not.toHaveTextContent("1");
});
