import { render, screen, fireEvent } from "@testing-library/react";
import MainContent from "."; 
import List from "../List";

describe("MainContent integration tests", () => {
  
  test("renders  2 samples", () => {
    render(<MainContent />);
    
    const sample1= screen.getByText("Adam + Eve = 0")
    const sample2= screen.getByText("Davide + Pasta = 100")
    
    expect(sample1).toBeInTheDocument();
    expect(sample2).toBeInTheDocument();
  });
  
});
//integration test to check flow with buttonclick START
describe("BUTTON start clicked", () => {
  beforeEach(()=>{
    render(<MainContent />);
  })

  test("Start button clicked-samples disappear", () => {
    
    let buttonClicked= screen.getByRole('button', { name: /start/i })

    const sample1= screen.getByText("Adam + Eve = 0")
    const sample2= screen.getByText("Davide + Pasta = 100")

    fireEvent.click(buttonClicked);
    
    expect(sample1).not.toBeInTheDocument();
    expect(sample2).not.toBeInTheDocument();

  });

  test("Start button clicked-button text change", () => {
    
    let buttonClicked= screen.getByRole('button', { name: /start/i })
    
    fireEvent.click(buttonClicked);

    buttonClicked= screen.getByRole('button', { name: /stop and clear/i })
   
    expect(buttonClicked).toBeInTheDocument();

  });
});

//integration test app has been started-user  fill inputs and press "Caluclate compatibility"
describe("BUTTON start clicked", () => {


  test("user inputs 2 names and clicks the calculate compatibility button", () => {
    render(<MainContent />);
    let buttonClicked= screen.getByRole('button', { name: /start/i })
    
    fireEvent.click(buttonClicked);

    const name1 = "Mario";
    const name2 = "Peach";
  
    
    const inputField1 = screen.getByTestId("name1");
    const inputField2 = screen.getByTestId("name2");
  
    fireEvent.change(inputField1, { target: { value: name1 } });
    fireEvent.change(inputField2, { target: { value: name2 } });
  
    
    const buttonCompatibility = screen.getByRole('button', { name: /calculate compatibility/i });
    fireEvent.click(buttonCompatibility);
  
    
    const listCombinations = screen.getAllByRole("heading", { level: 5 });
    
    
    expect(listCombinations.length).toBe(1);
  });
  

 
});
