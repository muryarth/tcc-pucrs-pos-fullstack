import { formatToBRL } from "../../services/currency";

describe("Currency Service", () => {
  test("Deve formatar 1000 para a moeda brasileira.", () => {
    const resultado = formatToBRL(1000);
    expect(resultado).toMatch(/R\$\s*1\.000,00/);
  });

  test("Deve retornar R$ 0,00 para valores negativos.", () => {
    const resultado = formatToBRL(-50);
    expect(resultado).toBe("R$ 0,00");
  });
});
