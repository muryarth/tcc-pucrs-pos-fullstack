const formatToBRL = (valor: number): string => {
  if (valor < 0) return "R$ 0,00";

  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export { formatToBRL };
