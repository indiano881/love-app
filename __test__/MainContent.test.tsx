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
describe("user full interactions", () => {


  test("user starts app-fille 2 inputs-press compatability button-only his inputs displayed", () => {
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

  test("user starts app, fills 2 inputs 3 times, presses compatibility button 3 times, only 3 results displayed", () => {
    render(<MainContent />);
  
    const buttonStart = screen.getByRole('button', { name: /start/i });
    fireEvent.click(buttonStart);
  
    const buttonCompatibility = screen.getByRole('button', { name: /calculate compatibility/i });
  
    const name1 = "Mario";
    const name2 = "Peach";
  
    for (let i = 0; i < 3; i++) {
      const inputField1 = screen.getByTestId("name1");
      const inputField2 = screen.getByTestId("name2");
  
      fireEvent.change(inputField1, { target: { value: name1 } });
      fireEvent.change(inputField2, { target: { value: name2 } });
  
      fireEvent.click(buttonCompatibility);
    }
  
    
    const listCombinations = screen.getAllByRole("heading", { level: 5 });
    expect(listCombinations.length).toBe(3);
  });

  test("user starts app, fills 2 inputs 3 times, presses compatibility button 3 times, then presses STOP AND CLEAR, 0 results displayed", () => {
  
    render(<MainContent />);
    
    let buttonStartStop = screen.getByRole('button', { name: /start/i });
    fireEvent.click(buttonStartStop); 
  
    const buttonCompatibility = screen.getByRole('button', { name: /calculate compatibility/i });
  
    const name1 = "Mario";
    const name2 = "Peach";
  
    for (let i = 0; i < 3; i++) {
      
      const inputField1 = screen.getByTestId("name1");
      const inputField2 = screen.getByTestId("name2");
      
      fireEvent.change(inputField1, { target: { value: name1 } });
      fireEvent.change(inputField2, { target: { value: name2 } });
  
      fireEvent.click(buttonCompatibility);
    }

    buttonStartStop = screen.getByRole('button', { name: /stop and clear/i });
    fireEvent.click(buttonStartStop);
  
    const listCombinations = screen.queryAllByRole("heading", { level: 5 });
    expect(listCombinations.length).toBe(0);
  });
  
  
});