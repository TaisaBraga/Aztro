import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SetAllCards from "./HomeCards";
import Card from "../molecules/Card";

describe("Given the HomeCards.tsx", () => {

  test("to render all cards", () => {
    render(
      <Router>
        <SetAllCards />
      </Router>
    );

    const cardsAtHomePage = screen.queryAllByTestId("cardsList");
    console.log("cardsAtHomePage", cardsAtHomePage)
    expect(cardsAtHomePage).toBeInTheDocument()

  });
});
