import {render, screen} from "@testing-library/react";

import Footer from ".";

describe("Render footer and its content", ()=> {
    
    test("Render footer and its content", () => {
        render(<Footer author={"mocktest"} month={"aUG"} year={"2028"} />);

        const authorText = screen.getByText(/mocktest/i);

        expect(authorText).toBeInTheDocument();
    });

    test("Render footer and its content", () => {
        render(<Footer author={"mocktest"} month={"aUG"} year={"2028"} />);
        
        const monthText = screen.getByText(/aug/i);
    
        expect(monthText).toBeInTheDocument();
    });

    test("Render footer and its content", () => {
        render(<Footer author={"mocktest"} month={"aUG"} year={"2028"} />);

        const yearText = screen.getByText(/2028/i);

        expect(yearText).toBeInTheDocument();
    });

})

//render what

//what test--choose right matcher

//what expect and where