import {render, screen} from "@testing-library/react";
import Header from ".";

describe("PAge header", ()=> {
    test("Renders page title", ()=> {
        render(<Header />)
        const headerText=screen.getByText(/love app/i);
        expect(headerText).toBeInTheDocument();
    })
    test("Renders page SUBtitle", ()=> {
        render(<Header />)
        const headerText=screen.getByRole("heading", {level: 2});
        expect(headerText).toBeInTheDocument();
    })


})
