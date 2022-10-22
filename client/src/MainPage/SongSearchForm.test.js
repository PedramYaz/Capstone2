import React from "react";
import { render } from "@testing-library/react";
import SongSearchForm from "./SongSearchForm";

it("renders without crashing", function () {
  render(<SongSearchForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<SongSearchForm />);
  expect(asFragment()).toMatchSnapshot();
});
