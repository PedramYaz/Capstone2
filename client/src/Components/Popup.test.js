import React from "react";
import { render } from "@testing-library/react";
import Popup from "./Popup";

it("render", function () {
  render(<Popup />);
});
it("matches snapshot", function () {
  const { asFragment } = render(<Popup />);
  expect(asFragment()).toMatchSnapshot();
});
