import {render, screen} from "@testing-library/react";
import Header from ".";

test("Renders page title", ()=> {
    render(<Header />)
    const headerText=screen.getByText(/love app/i);
    expect(headerText).toBeInTheDocument();
})