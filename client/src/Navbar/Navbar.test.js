import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

it("render", function () {
  render(<Navbar />);
});
it("Matches snapshot", function () {
  const { asFragment } = render(<Navbar />);
  expect(asFragment()).toMatchSnapshot();
});
