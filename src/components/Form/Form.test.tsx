import { fireEvent, getByTestId, render, screen} from "@testing-library/react";
import Form from ".";


describe("Form", ()=> {
    test("Renders 2 inputs field", ()=> {
        render(<Form />)
        const inputFields= screen.getAllByRole("textbox")
        expect(inputFields.length).toBe(2)
    })
    test("Renders 1 button", ()=> {
        render(<Form />)
        const ButtonFields= screen.getByRole("button")
        expect(ButtonFields).toBeInTheDocument();
    })
    test("Button click", async () => {
        // Render the Form component
        render(<Form />);  
        
        const mockName1 = "Adam";
        const mockName2 = "Eve";
    
        // Get the input fields by testId
        const inputField1 = screen.getByTestId("name1");
        const inputField2 = screen.getByTestId("name2");
    
        // Simulate user typing into input fields
        fireEvent.change(inputField1, { target: { value: mockName1 } });
        fireEvent.change(inputField2, { target: { value: mockName2 } });
    
        // Get the button element by role
        const buttonField = screen.getByRole("button");
    
        // Click the button to trigger form submission
        fireEvent.click(buttonField);
    
        // Wait for the compatibility score message to appear after clicking the button
        const compatibilityScore = await screen.findByTestId("score-message");
    
        // Expect the compatibility score to be displayed in the document
        expect(compatibilityScore).toBeInTheDocument();
    });
    
})

