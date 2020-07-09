import React from "react";
import renderer from "react-test-renderer";

import { Loader } from "./index";

describe("Loader", () => {
  it("should render and match the snapshot", () => {
    const tree = renderer.create(<Loader size={30} color="#ee99ee" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
