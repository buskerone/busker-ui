import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@buskerone/primitives";
import { Text } from "./Text";

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

it("renders the correct element with `as`", () => {
  renderWithTheme(<Text as="h1">Hello</Text>);
  expect(screen.getByText("Hello").tagName).toBe("H1");
});

it("keeps user className for overrides", () => {
  renderWithTheme(<Text className="text-white font-bold">Hi</Text>);
  const el = screen.getByText("Hi");
  expect(el).toHaveClass("text-white");
  expect(el).toHaveClass("font-bold");
});
