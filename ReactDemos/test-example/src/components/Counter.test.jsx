import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import { describe, expect, test } from "vitest";

describe("Counter", () => {
  test("increments count when button is clicked", async () => {
    render(<Counter />);

    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /increment/i });

    await user.click(button);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Count: 1");
  });
});
