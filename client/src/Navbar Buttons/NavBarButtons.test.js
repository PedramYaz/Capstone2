import React from "react";
import { render } from "@testing-library/react";
import About from "./About";
import Instructions from "./Instructions";
import Leaderboards from "./Leaderboards";
import SmileyFace from "./SmileyFace";

describe("Renders all popup components", function () {
  it("renders about popup", function () {
    render(<About />);
  });
  it("renders instructions popup", function () {
    render(<Instructions />);
  });
  it("renders leaderboards popup", function () {
    render(<Leaderboards />);
  });
  it("renders smileyface", function () {
    render(<SmileyFace />);
  });
});
