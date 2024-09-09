import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";  


//isTarted===false means input field disabled
describe("Content that is visible on page load", () => {
  beforeEach(() => {
    render(
    <Form 
    isStarted={false} 
    combinations={[]} 
    setCombinations={() => {}} 
    score={0} 
    setScore={() => {}} 
    />
  );
  });

  test("Renders 2 input fields", () => {
    const inputFields = screen.getAllByRole("textbox");
    expect(inputFields.length).toBe(2);
  });

  test("Renders 1 button", () => {
    const buttonField = screen.getByRole("button");
    expect(buttonField).toBeInTheDocument();
  });

});


//isStarted===true, then input field NOT disabled
describe("Content that is visible after START", () => {
  beforeEach(() => {
    render(
    <Form 
    isStarted={true} 
    combinations={[]} 
    setCombinations={() => {}} 
    score={0} 
    setScore={() => {}} 
    />
  );
  });

  test("Renders 2 input fields", () => {
    const inputFields = screen.getAllByRole("textbox");
    expect(inputFields.length).toBe(2);
  });

  test("Renders 1 button", () => {
    const buttonField = screen.getByRole("button");
    expect(buttonField).toBeInTheDocument();
  });
});

describe("Form interaction with various STRING inputs or NULL", () => {
  
  const cases = [
    ["Adam", "Eve", true],  
    ["", "Eve", false],     
    ["Adam", "", false],    
    ["", "", false],       
  ];

  test.each(cases)(
    "Button click with STRING or NULL combinations",
    async (name1, name2, shouldShowScore) => {
      render(
      <Form 
      isStarted={true} 
      combinations={[]} 
      setCombinations={() => {}} 
      score={null} 
      setScore={() => {}} 
      />
    );

      const inputField1 = screen.getByTestId("name1");
      const inputField2 = screen.getByTestId("name2");

      fireEvent.change(inputField1, { target: { value: name1 } });
      fireEvent.change(inputField2, { target: { value: name2 } });

      const buttonField = screen.getByRole("button");
      fireEvent.click(buttonField);

      const compatibilityScore = shouldShowScore
        ? await screen.findByTestId("score-message")
        : screen.queryByTestId("score-message");

      if (shouldShowScore) {
        expect(compatibilityScore).toBeInTheDocument();
      } else {
        expect(compatibilityScore).toBeNull();
      }
    }
  );
});

describe("Form interaction with NUMBER values", () => {
  const numericCases = [
    [0, "", false],        
    ["Adam", 8, false],    
    [341, 8, false],       
  ];

  test.each(numericCases)(
    "Button click with NUMBER or NULL values",
    async (name1, name2, shouldShowScore) => {
      render(<Form 
        isStarted={true} 
        combinations={[]} 
        setCombinations={() => {}} 
        score={null} 
        setScore={() => {}} 
        />
      );

      const inputField1 = screen.getByTestId("name1");
      const inputField2 = screen.getByTestId("name2");

      fireEvent.change(inputField1, { target: { value: name1 } });
      fireEvent.change(inputField2, { target: { value: name2 } });

      const buttonField = screen.getByRole("button");
      fireEvent.click(buttonField);

      const compatibilityScore = shouldShowScore
        ? await screen.findByTestId("score-message")
        : screen.queryByTestId("score-message");

      expect(compatibilityScore).toBe(null);
    }
  );
});