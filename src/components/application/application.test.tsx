import { Application } from "./application";
import {render, screen} from '@testing-library/react'

describe("Application", ()=>{
    test('renders correctly', ()=>{
        render(<Application/>)
        const nameElement = screen.getByRole("textbox", { name : "Name"});
        expect(nameElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument();

        const pageHeading = screen.getByRole("heading", {
            level:1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", {
            level:2
        });
        expect(sectionHeading).toBeInTheDocument();

        const termsElement = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsElement).toBeInTheDocument();

        const nameElement2 = screen.getByPlaceholderText("Fullname")
        expect(nameElement2).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument();

    })
})