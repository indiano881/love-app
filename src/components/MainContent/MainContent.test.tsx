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