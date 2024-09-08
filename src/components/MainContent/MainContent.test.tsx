import { render, screen, fireEvent } from "@testing-library/react";
import MainContent from "."; 

describe("MainContent integration tests", () => {
  
  test("renders  2 samples", () => {
    render(<MainContent />);
    
    const sample1= screen.getByText("Adam + Eve = 0")
    const sample2= screen.getByText("Davide + Pasta = 100")
    
    expect(sample1).toBeInTheDocument();
    expect(sample2).toBeInTheDocument();
  });
  
  test("adds a new combination via Form and updates List", () => {
    render(<MainContent />);

    
    const inputField1 = screen.getByTestId("name1");
    const inputField2 = screen.getByTestId("name2");

    fireEvent.change(inputField1, { target: { value: "Romeo" } });
    fireEvent.change(inputField2, { target: { value: "Juliet" } });

   
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    
    expect(screen.getByText("Romeo + Juliet = someScore")).toBeInTheDocument(); 
  });
});
