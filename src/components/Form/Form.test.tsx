import { fireEvent, getByTestId, render, screen} from "@testing-library/react";
import Form from ".";

import userEvent from "@testing-library/user-event";
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
    
})

