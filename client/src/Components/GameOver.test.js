import React from "react";
import { render } from "@testing-library/react";
import GameOver from "./GameOver";
import axios from "axios";

it("render", function () {
  render(<GameOver />);
});
