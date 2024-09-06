import { fireEvent, getByTestId, render, screen} from "@testing-library/react";
import Form from ".";
import { SetStateAction } from "react";


describe("Form", ()=> {
    test("Renders 2 inputs field", ()=> {
        render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
            throw new Error("Function not implemented.");
        } } />)
        const inputFields= screen.getAllByRole("textbox")
        expect(inputFields.length).toBe(2)
    })
    test("Renders 1 button", ()=> {
        render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
            throw new Error("Function not implemented.");
        } } />)
        const ButtonFields= screen.getByRole("button")
        expect(ButtonFields).toBeInTheDocument();
    })
    
})

describe("3 possible combinations of click-STRING CASES", ()=> {
    
    //user s fill both textbox and press button= CORRECT OPTION
    test("Button click", async () => {
        render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
            throw new Error("Function not implemented.");
        } } />);  
        
        const mockName1 = "Adam";
        const mockName2 = "Eve";
    
        const inputField1 = screen.getByTestId("name1");
        const inputField2 = screen.getByTestId("name2");
    
        fireEvent.change(inputField1, { target: { value: mockName1 } });
        fireEvent.change(inputField2, { target: { value: mockName2 } });
    
        const buttonField = screen.getByRole("button");
    
        fireEvent.click(buttonField);
    
        const compatibilityScore = await screen.findByTestId("score-message");
    
        expect(compatibilityScore).toBeInTheDocument();
    });
     //user s fills only SECOND textbox and press button= WRONG OPTION
     test("Button click", async () => {
        render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
            throw new Error("Function not implemented.");
        } } />);  
        
        const mockName1 = "";
        const mockName2 = "Eve";
    
        const inputField1 = screen.getByTestId("name1");
        const inputField2 = screen.getByTestId("name2");
    
        fireEvent.change(inputField1, { target: { value: mockName1 } });
        fireEvent.change(inputField2, { target: { value: mockName2 } });
    
        const buttonField = screen.getByRole("button");
    
        fireEvent.click(buttonField);
    
        const compatibilityScore =  screen.queryByTestId("score-message");
    
        expect(compatibilityScore).toBe(null);
    });
     //user s fills only FIRST textbox and press button= WRONG OPTION
     test("Button click", async () => {
        render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
            throw new Error("Function not implemented.");
        } } />);  
        
        const mockName1 = "Adam";
        const mockName2 = "";
    
        const inputField1 = screen.getByTestId("name1");
        const inputField2 = screen.getByTestId("name2");
    
        fireEvent.change(inputField1, { target: { value: mockName1 } });
        fireEvent.change(inputField2, { target: { value: mockName2 } });
    
        const buttonField = screen.getByRole("button");
    
        fireEvent.click(buttonField);
    
        const compatibilityScore =  screen.queryByTestId("score-message");
    
        expect(compatibilityScore).toBe(null);
    });
    //user s fills only FIRST textbox and press button= WRONG OPTION
    test("Button click", async () => {
        render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
            throw new Error("Function not implemented.");
        } } />);  
        
        const mockName1 = "";
        const mockName2 = "";
    
        const inputField1 = screen.getByTestId("name1");
        const inputField2 = screen.getByTestId("name2");
    
        fireEvent.change(inputField1, { target: { value: mockName1 } });
        fireEvent.change(inputField2, { target: { value: mockName2 } });
    
        const buttonField = screen.getByRole("button");
    
        fireEvent.click(buttonField);
    
        const compatibilityScore =  screen.queryByTestId("score-message");
    
        expect(compatibilityScore).toBe(null);
    });
    describe("3 possible combinations of click-NUMBER CASES", ()=> {
        test("Button click", async () => {
            render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
                throw new Error("Function not implemented.");
            } } />);  
            
            const mockName1 = 0;
            const mockName2 = "";
        
            const inputField1 = screen.getByTestId("name1");
            const inputField2 = screen.getByTestId("name2");
        
            fireEvent.change(inputField1, { target: { value: mockName1 } });
            fireEvent.change(inputField2, { target: { value: mockName2 } });
        
            const buttonField = screen.getByRole("button");
        
            fireEvent.click(buttonField);
        
            const compatibilityScore =  screen.queryByTestId("score-message");
        
            expect(compatibilityScore).toBe(null);
        });
        test("Button click", async () => {
            render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
                throw new Error("Function not implemented.");
            } } />);  
            
            const mockName1 = "Adam";
            const mockName2 = 8;
        
            const inputField1 = screen.getByTestId("name1");
            const inputField2 = screen.getByTestId("name2");
        
            fireEvent.change(inputField1, { target: { value: mockName1 } });
            fireEvent.change(inputField2, { target: { value: mockName2 } });
        
            const buttonField = screen.getByRole("button");
        
            fireEvent.click(buttonField);
        
            const compatibilityScore =  screen.queryByTestId("score-message");
        
            expect(compatibilityScore).toBe(null);
        });
        test("Button click", async () => {
            render(<Form combinations={[]} setCombinations={function (value: SetStateAction<string[]>): void {
                throw new Error("Function not implemented.");
            } } />);  
            
            const mockName1 = 341;
            const mockName2 = 8;
        
            const inputField1 = screen.getByTestId("name1");
            const inputField2 = screen.getByTestId("name2");
        
            fireEvent.change(inputField1, { target: { value: mockName1 } });
            fireEvent.change(inputField2, { target: { value: mockName2 } });
        
            const buttonField = screen.getByRole("button");
        
            fireEvent.click(buttonField);
        
            const compatibilityScore =  screen.queryByTestId("score-message");
        
            expect(compatibilityScore).toBe(null);
        });
    })
})


