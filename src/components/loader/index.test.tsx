import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { Loader } from "./index";

describe("Loader", () => {
  it("renders and matches the snapshot", () => {
    const tree = renderer.create(<Loader size={30} color="#ee99ee" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the component", () => {
    render(<Loader />);
  });
});
