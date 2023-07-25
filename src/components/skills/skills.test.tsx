import { screen, render } from "@testing-library/react"
import { Skills } from "./skills";

describe('Skills', ()=>{
    const skills = ["HTML", "CSS", "JavaScript"];

    test('renders the list parent correctly', ()=>{
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test("renders list elements correctly", ()=>{
        render(<Skills skills={skills}/>)
        const listOfElements = screen.getAllByRole('listitem');
        expect(listOfElements).toHaveLength(skills.length);
    })
})