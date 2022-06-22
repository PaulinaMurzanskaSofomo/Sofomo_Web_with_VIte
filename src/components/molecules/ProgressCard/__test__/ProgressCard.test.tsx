import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProgressCard, Props } from "../ProgressCard";
import userEvent from "@testing-library/user-event";
import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

const ProgressCardProps: Props = {
  cardTitle: "Android Technologies",
  cardBodyText:
    "Proficient in Kotlin/Java/C++, Coroutines/RxAndroid, Retrofit Dagger/Koin, RESTful API’s, GraphQL, WebRTC, Firebase",
  cardActive: false,
  visited: false,
  id: "progress-card-1",
};

describe("ProgressCard", () => {
  test("1.should show card title", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("2.should contain the card component", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toContainElement(screen.getByTestId("card"));
  });

  test("3.should contain a left-aside bar ", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toContainElement(
      screen.getByTestId("vertical-bar")
    );
  });

  test("4.should contain title provided in props ", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toHaveTextContent(ProgressCardProps.cardTitle);
  });

  test("5.should display text content provided in props in the Card body  ", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toHaveTextContent(ProgressCardProps.cardBodyText);
  });

  test("6.should add active classes if prop active class is true  ", () => {
    render(<ProgressCard {...ProgressCardProps} visited cardActive />);
    const visited = true;
    const cardActive = true;

    expect(screen.getByTestId("check-mark")).toHaveClass((cardActive || visited) && "active");
    expect(screen.getByTestId("vertical-line")).toHaveClass((cardActive || visited) && "active");

    expect(screen.getByTestId("card-wrapper")).toHaveClass(cardActive && "active");
  });

  test("7. should have cursor pointer attribute", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toHaveStyle("cursor:pointer");
  });
});
