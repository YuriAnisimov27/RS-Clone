import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Loader from "../Loader/Loader";
import SettingsPage from "../../pages/SettingPage/SettingsPage";
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

describe("Testing <Loader/>", () => {
  it("Loader have rendered correctly", () => {
    const element = renderer.create(<Loader />).toJSON();
    expect(element).toMatchSnapshot();
  });
});

describe("Testing <SettingsPage/>", () => {
  it("SettingsPage have rendered correctly", () => {
    const element = renderer.create(<SettingsPage />).toJSON();
    expect(element).toMatchSnapshot();
  });
});

describe("Testing <App/>", () => {
  it("App have rendered correctly", () => {
    const element = shallow(<App />);
    expect(element).toMatchSnapshot();
  });
});
