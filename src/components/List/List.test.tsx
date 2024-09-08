import { fireEvent, render, screen } from "@testing-library/react";
import List from ".";
import { SetStateAction } from "react";

describe("Content that is visible on page load (isStarted = false)", () => {
  beforeEach(() => {
    render(
      <List
        isStarted={false}
        setIsStarted={() => {}}
        setCombinations={() => {}}
        combinations={[]}
      />
    );
  });

  test("Renders 2 samples of the app", () => {
    const inputFields = screen.getAllByRole("heading", { level: 5 });
    expect(inputFields.length).toBe(2);
  });
});

describe("Content after START button is pressed (isStarted = true)", () => {
  beforeEach(() => {
    render(
      <List
        isStarted={true}
        setIsStarted={() => {}}
        setCombinations={() => {}}
        combinations={[]}
      />
    );
  });

  test("Renders 0 samples of the app", () => {
    const inputFields = screen.queryAllByRole("heading", { level: 5 });
    expect(inputFields.length).toBe(0); 
  });
});
