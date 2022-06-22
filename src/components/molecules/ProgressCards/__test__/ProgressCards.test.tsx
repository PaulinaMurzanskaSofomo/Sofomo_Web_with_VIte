import { screen, render, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProgressCards } from "../ProgressCards";

beforeEach(() => render(<ProgressCards />));

describe("Progress Cards", () => {
  test("1. should be in the document", () => {
    const progressCards = screen.getByTestId("progress-cards");
    expect(progressCards).toBeInTheDocument();
  });
  test("1. should display 4 cards", () => {
    const progressCards = screen.getByTestId("progress-cards");
    const cards = screen.getAllByTestId("progress-card");
    expect(cards.length).toBe(4);
  });
});
