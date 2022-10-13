import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SingleCard from "./Card";

describe("Given Card.tsx", () => {
  test("When the page is loaded the Card, then it must contain image and text", () => {
    render(
      <Router>
        <SingleCard
          signName={{ signNamePt: "aries", signNameEn: "aries" }}
          imageName={"aries"}
        />
      </Router>
    );

    //encontrar a imagem
    const image = screen.getByRole("img");
    //garantir que a imagem esteja no documento
    expect(image).toBeInTheDocument();

    const NameOfSign = screen.getByText("aries");
    expect(NameOfSign).toBeInTheDocument();
  });

});
