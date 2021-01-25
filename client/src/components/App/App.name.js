import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

test("adds 1 + 2 to equal 3", () => {
  function sum(a, b) {
    return a + b;
  }

  expect(sum(1, 2)).toBe(3);
});

test("testing react-test-renderer", () => {
  function MyComponent() {
    return (
      <div>
        <SubComponent foo="bar" />
        <p className="my">Hello</p>
      </div>
    );
  }

  function SubComponent() {
    return <p className="sub">Sub</p>;
  }

  const testRenderer = renderer.create(<MyComponent />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(SubComponent).props.foo).toBe("bar");
  expect(testInstance.findByProps({ className: "sub" }).children).toEqual([
    "Sub",
  ]);
});

describe("Testing <App/>", () => {
  it("App have rendered correctly", () => {
    const element = renderer.create(<App />).toJSON();

    expect(element).toMatchSnapshot();
  });
});
