import { render, screen, rerender } from "@testing-library/react";

import { beforeEach, describe, expect, test } from "vitest";
import Balance from "../src/balance";

describe("pruebas de componente Balance", () => {
  test("cuando el componente es nuevo debe de colocar una clase que en caso de ser hombre sea zeroToMale", () => {
    const BalanceComponent = render(<Balance sex="male" />);
    const element =
      BalanceComponent.container.getElementsByClassName("zeroToMale").length;

    expect(element).toBeTruthy();
  });
  test("cuando de hombre pasa a mujer deberia ser maleToFemale", () => {
    const BalanceComponent = render(<Balance sex="male" />);
    BalanceComponent.rerender(<Balance sex="female" />);
    const element =
      BalanceComponent.container.getElementsByClassName("maleToFemale").length;
    screen.debug();
    expect(element).toBeTruthy();
  });
});
