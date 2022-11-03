import React from "react";
import Home from "../pages/index";
import { render } from "@testing-library/react";

test("home", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
