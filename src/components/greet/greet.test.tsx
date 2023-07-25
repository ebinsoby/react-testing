import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet name={undefined} />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
  describe("Nested describe", () => {
    test("Greet renders a name", () => {
      render(<Greet name="Ebin" />);
      const textElement = screen.getByText("Hello Ebin");
      expect(textElement).toBeInTheDocument();
    });
  });
});
