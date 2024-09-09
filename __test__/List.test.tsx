import { render, screen } from "@testing-library/react";
import List from ".";


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

  test("Renders 2 samples of the app-", () => {
    const samples = screen.queryAllByRole("heading", { level: 5 });
    expect(samples.length).toBe(2);
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
    const samples = screen.queryAllByRole("heading", { level: 5 });
    expect(samples.length).toBe(0); 
  });
});

describe("Simple button START/STOP and CLEAR button toggle", () => {
    render(
      <List
        isStarted={true}
        setIsStarted={() => {}}
        setCombinations={() => {}}
        combinations={[]}
      />
    );
  

  test("Start text visible on page load when isStarted is false", () => {
    render(
        <List
          isStarted={false}
          setIsStarted={() => {}}
          setCombinations={() => {}}
          combinations={[]}
        />
      );
    const buttonText = screen.getByText(/start/i);
    expect(buttonText).toBeInTheDocument();
  });

  test("Stop and clear text visible after START when isStarted is true", () => {
    render(
        <List
          isStarted={true}
          setIsStarted={() => {}}
          setCombinations={() => {}}
          combinations={[]}
        />
      );
    const buttonText = screen.getByText(/stop and clear/i);
    expect(buttonText).toBeInTheDocument();
  });
});
