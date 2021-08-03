import React from "react";
import App from "../App";

describe("should render App component", () => {
  it("should contain App className", () => {
    const component = shallow(<App />);
    const wrapper = component.find(".App");
    // expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
